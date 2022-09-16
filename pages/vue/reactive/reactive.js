import { activeEffect } from './effect.js'

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

    activeEffect && deps.add(activeEffect) && activeEffect.deps.add(deps)
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

if (typeof window !== 'undefined') {
    window.depsMap = depsMap
    window.reactive = reactive
}

export { reactive }
