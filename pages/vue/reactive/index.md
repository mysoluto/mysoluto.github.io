---
title: vue 响应式
date: 2022-09-16
---

# 响应式

响应式是描述解决 数据和UI渲染直接联系的一种直观方案，人们只需要设定好数据和UI的关系，后续更新数据，框架层面会确保UI得到正确渲染， 传统的方式是类似jquery的方式，直接操作dom, 这种方式成本高且可维护性相对差些，现代前端框架大部分是响应式的解决方案，响应式的一个基本流程是：

渲染函数（组件里面的render, 负责根据数据描述UI， 也可能是单纯的计算函数），依赖值（变量），收集 渲染函数和依赖值之间的关系并存储，后续检测到 依赖值的变化，就重新运行渲染函数，更新UI

这里主要参考“书籍” 描述vue响应式的大致实现，对应vue3里面的 @vue/reactivity


## 如何收集依赖

收集依赖，其实就是保存好 渲染函数和变量之间的依赖关系, 这里主要是去监听 变量的读取（使用）、设置（更新），vue2中是通过Object.defineProperty实现，比如

```js
const originData = { count: 1 }

function wrapper(originData) {
    const data = {}
    // Object.keys遍历
    Object.keys(originData).forEach(key => {
        Object.defineProperty(data, key, {
            get() {
                console.log('read', key)
                return originData[key]
            },
            set(value) {
                console.log('write', key, value)
                originData[key] = value
                return true
            }
        })
    })

    return data
}

const data = wrapper(originData)

const data2 = wrapper({ name: 'hello', count: 2 })
```

新的方式是通过```Proxy```的方式，实现同样的效果可以这样

```js
function wrapper(originData) {
    return new Proxy(originData, {
        get(target, key) {
            console.log('read', key)
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            console.log('write', key, value)
            return Reflect.set(target, key, value)
        }
    })
}
```

在了解了监听变量 读取 或 修改的方式之后，我们可以继续定义如下概念，之所以需要对fn进行包装处理，是因为JS是单线程顺序执行的，单个时间点最多只有一个函数在运行，因此可以通过这种方式，跟踪变量和 函数直接的关系，比如

fn: 渲染函数 或者 其它需要监听变量，然后rerun的函数
effect: 对 fn进行包装的工具函数，使用 ```effect(fn)```

```js
let activeEffect

const data = { h1: 'hello, world', h2: 'hello, h2', h3: 'hello, h3' }

function effect(fn) {
    activeEffect = fn
    fn()
    activeEffect = null
}

const render = () => { console.log(data.h1) }

effect(renderEffect)

```
上面的方式有一个缺陷，即如果 render有嵌套的

```js
const render = () => {
    console.log(data.h1)

    effect(() => {
        console.log(data.h2)
    })

    // 这个时候 activeEffectFn 是null的
    console.log(data.h3)
}
```

改进方案是如下：(通过维护一个堆栈，跟踪effect执行的嵌套)

```js
let activeEffect
const effectStack = []

const pushTarget = (effect) => effectStack.push(effect)

const popTarget = () => {
    effectStack.pop()
    activeEffect = effectStack[effectStack.length-1]
}

function effect(fn) {
    const effectFn = () => {
        pushTarget(effectFn)

        fn()

        popTarget()
    }

    effectFn.id = `effect${Date.now()}`

    effectFn()
}
```

当前我们已经包装了 fn 的运行上下文，确保fn运行的时候，activeEffect指向 当前fn的包装函数 effectFn, 接下来，我们需要对 data进行拦截，收集 data和 fn之间的联系，通过定义 track 和 trigger函数来处理这些逻辑

```js
// 保存的结构参考vue的，这里暂时没有深入思考
// WeakMap = { <target>: Map(= { <key>: new Set<effectFn> } ) }
const depsMap = new WeakMap()

function track(target, key) {
    let targetDep = depsMap.get(target)

    if (!targetDep) {
        depsMap.set(target, targetDep = new Map())
    }

    let deps = targetDep.get(key)

    if (!deps) {
        targetDep.set(key, deps = new Set())
    }

    activeEffect && deps.add(activeEffect)
}

function trigger(target, key, value) {
    const targetDep = depsMap.get(target)
    if (!targetDep) {
        return
    }
    const deps = targetDep.get(key)

    if (!deps) {
        return
    }

    const effectRun = new Set()

    for (const effectFn of deps) {
        effectFn !== activeEffect && effectRun.add(effectFn)
    }

    for (const effectFn of effectRun) {
        effectFn()
    }
}

function reactive(obj) {
    return new Proxy(obj, {
        get(target, key) {
            track(target, key)
            return Reflect.get(target, key)
        },
        set(target, key, value) {
            const result = Reflect.set(target, key, value)
            trigger(target, key, value)
            return value
        }
    })
}
```

如上，当前有两个问题：
1、每次运行render的时候，嵌套的effect 运行会产生一个新的effectFn,并被保存到了deps中，此时改变 data.h2的值，会看到 打印了两个 （原因是deps中有两个effectFn, 包装的fn的逻辑是一致的
2、假如render函数里面的 逻辑是这样的，```console.log(data.ok ? data.h1 : 'default hello')```, 此时如果 data.ok开始是false, 则始终收集不到 data.h1这个依赖，就算后续设置data.ok = true， 此时改变data.h1, 同样不会触发 effectFn的运行

```js
const data = { ok: false, h1: 'hello, h1' }

effect(() => console.log(data.ok ? data.h1 : 'default hello' ))

```

问题2的解决方案：每次运行effectFn都先清除依赖，相当于重新走收集过程

```js
function cleanEffect(effectFn) {
    effectFn.deps.forEach(deps => {
        deps.delete(effectFn)
    })
}

function effect(fn) {
    const effectFn = () => {
        cleanEffect(effectFn)
        pushTarget(effectFn)
        fn()
        popTarget()
    }
    // ...
}
```




