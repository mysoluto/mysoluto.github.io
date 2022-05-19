---
title: webpack
date: 2022-05-19
---

# webpack 学习

## webpack bootstrap 源码

webpack bootstrap是 webpack打包之后的启动代码，以下部分是基于webpack 4.x的源码逻辑，在webpack 5.x中，MainTemplate文件被废弃掉了

在MainTemplate.js里面定义了 renderBootstrap方法，返回bootstrap的代码 大致如下

在window下面挂载了一个变量 `webpackJsonp`, 这个变量名可以在 output options里面可以更改，webpackJsonp是一个普通的数据，其push方法被绑定成webpackJsonpCallback

然后对chunk代码的加载，其模式是

```js
(window['webpackJsonp'] = window['webpackJsonp'] || []).push([[188], [moreModules], [exectedModules]])
```

因此从webpackJsonp中可以看出加载了多少个chunk, 以及所有的module模块；在实际加载chunk的时候，执行的是webpackJsonpCallback方法，参数如上，是一个多维数组

```js
function webpackJsonpCallback(data) {
  const chunkIds = data[0]
  const moreModules = data[1]
  const exectedModules = data[2]

  const resolves = []
  chunkIds.forEach(function(chunkId){
    if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
      resolves.push(installedChunks[chunkId][0])
    }
    installedChunks[chunkId] = 0 // 0 标记chunk loaded
  })

  for (m in moreModules) {
    if (Object.prototype.hasOwnProperty.call(moreModules, m)) {
      // 缓存模块
      modules[m] = moreModules[m]
    }
  }

  if(parentJsonpFunction) parentJsonpFunction(data)

  while (resolves.length) {
    reosolves.shift()()
  }

  deferedModuels.push.apply(deferedModules, execedModules)

  return checkDeferredModules()
}
```

下载chunk js文件，然后执行上面的webpackJsonpCallback函数，缓存chunk里面包含的module，后面代码执行的时候，实际通过`__webpack_require__(moduleId)` 加载模块，类似于源码里面的
`const vue = require('vue')`

在__webpack_require__，执行具体的模块加载逻辑，该function下面也挂载了一些扩展extension方法，比如（__webpack_require__.s, __webpack_require__.c等），其中比较重要的是
`__webpack_require__.e`, 增加script标签来加载chunk js文件，chunk js的路径通过jsonpScriptSrc方法获取

```js
(function(modules){
  function webpackJsonpCallback(data) {}

  function checkDeferredModules() {}

  var installedModules = []

  var installedChunks = {}

  var installedCssChunks = []

  function jsonpScriptSrc(chunkId) {}

  function __webpack_require__(moduleId) {}

  // require function shortcuts:
  // __webpack_require__.s = the module id of the entry point
  // __webpack_require__.c = the module cache
  // __webpack_require__.m = the module functions
  // __webpack_require__.p = the bundle public path
  // __webpack_require__.i = the identity function used for harmony imports
  // __webpack_require__.e = the chunk ensure function
  // __webpack_require__.d = the exported property define getter function
  // __webpack_require__.o = Object.prototype.hasOwnProperty.call
  // __webpack_require__.r = define compatibility on export
  // __webpack_require__.t = create a fake namespace object
  // __webpack_require__.n = compatibility get default export
  // __webpack_require__.h = the webpack hash
  // __webpack_require__.w = an object containing all installed WebAssembly.Instance export objects keyed by module id
  // __webpack_require__.oe = the uncaught error handler for the webpack runtime
  // __webpack_require__.nc = the script nonce

  var jsonpArray = window['webpackJsonp'] = window['webpackJsonp'] || []
  var jsonpOldFunction = jsonpArray.push.bind(jsonpArray)
  jsonpArray.push = webpackJsonpCallback
  jsonpArray = jsonpArray.slice()

  for(; var i < jsonpArray.length; i++) {
    webpackJsonpCallback(jsonpArray[i])
  }
  var parentJsonpFunction = jsonpOldFunction

  checkDeferredModules()
})([])
```