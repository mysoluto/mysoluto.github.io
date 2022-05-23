---
title: 日常开发遇到的问题
date: 2022-05-23
---

## 解决vue-cli serve本地运行不正常

表现：执行 vue-cli-service serve ./src/main.ts 之后，本地spa项目正常启动,访问页面的时候，页面一直没办法正常呈现，查看js资源请求，发现只有一个chunk-vendors文件，没有其他js文件

原因：serve命令下，后面附加了入口参数 `./src/main.ts`, 然后 vue-cli的配置文件vue.config.js里面，包含了这样一个配置

```js
pages: { index: './src/main.ts' }

// 如果有入口参数，webpack配置的entry是这样
entry: { app: './src/main.ts' }
```
在[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin#options)中有一个参数`chunks`, 它表示chunk的白名单，只有在白名单里面的chunk，才会最终inject到html文件中，对应当前场景，就是因为错误的chunks配置，导致入口chunk js文件没有在白名单中

解决方案：去掉serve后面的入口参数 或者 把pages配置改成 `{ app: './src/main.ts' }`