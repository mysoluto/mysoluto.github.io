let activeEffect
const effectStack = []

const pushTarget = (effect) => effectStack.push(activeEffect = effect)

const popTarget = () => {
    effectStack.pop()
    activeEffect = effectStack[effectStack.length-1]
}

function cleanEffect(effectFn) {
    console.log('clean effect', effectFn.id, effectFn.deps.size)

    effectFn.deps.forEach(deps => {
        // console.log(deps.has(effectFn), deps.size)
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

    effectFn.id = `effect${Date.now()}`

    // 为什么是数组
    effectFn.deps = new Set()

    effectFn()
}

if (typeof window !== 'undefined') {
    window.activeEffect = activeEffect
    window.effectStack = effectStack
}

export { activeEffect, effect }