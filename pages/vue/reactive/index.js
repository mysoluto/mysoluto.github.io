import { effect } from './effect.js'

import { reactive } from './reactive.js'

const render = () => {
    console.log(data.h1)

    effect(() => {
        console.log(data.h2)
    })

    // 这个时候 activeEffectFn 是null的
    console.log(data.h3)
}

const data = reactive({ h1: 'hello, world', h2: 'hello, h2', h3: 'hello, h3' })

effect(render)