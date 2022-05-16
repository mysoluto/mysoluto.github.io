---
title: Vite
date: 2022-05-16
---

# Vite :100:

## Vite Plugins 列表 

```json
[{
    "name": "vite:build-metadata",
    "hooks": ["renderChunk"]
  }, {
    "name": "alias",
    "hooks": ["buildStart", "resolveId"]
  }, {
    "name": "vite:modulepreload-polyfill",
    "hooks": ["resolveId", "load"]
  }, {
    "name": "vite:resolve",
    "hooks": ["configureServer", "resolveId", "load"]
  }, {
    "name": "vite:html-inline-proxy",
    "hooks": ["resolveId", "load"]
  }, {
    "name": "vite:css",
    "hooks": ["configureServer", "buildStart", "transform"]
  }, {
    "name": "vite:esbuild",
    "hooks": ["configureServer", "configResolved", "buildEnd", "transform"]
  }, {
    "name": "vite:json",
    "hooks": ["transform"]
  }, {
    "name": "vite:wasm",
    "hooks": ["resolveId", "load"]
  }, {
    "name": "vite:worker",
    "hooks": ["buildStart", "load", "transform", "renderChunk"]
  }, {
    "name": "vite:asset",
    "hooks": ["buildStart", "resolveId", "load", "renderChunk", "generateBundle"]
  }, {
    "name": "vitepress",
    "hooks": ["configResolved", "config", "resolveId", "load", "transform", "renderStart", "configureServer", "renderChunk", "generateBundle", "handleHotUpdate"]
  }, {
    "name": "vite:vue",
    "hooks": ["handleHotUpdate", "config", "configResolved", "configureServer", "buildStart", "resolveId", "load", "transform"]
  }, {
    "name": "vitepress:data",
    "hooks": ["configResolved", "configureServer", "load", "transform", "handleHotUpdate"]
  }, {
    "name": "vite:define",
    "hooks": ["transform"]
  }, {
    "name": "vite:css-post",
    "hooks": ["buildStart", "transform", "renderChunk", "generateBundle"]
  }, {
    "name": "vite:build-html",
    "hooks": ["transform", "generateBundle"]
  }, {
    "name": "vite:worker-import-meta-url",
    "hooks": ["configureServer", "transform"]
  }, {
    "name": "vite:watch-package-data",
    "hooks": ["buildStart", "buildEnd", "watchChange"]
  }, {
    "name": "commonjs",
    "hooks": ["buildStart", "resolveId", "load", "transform", "moduleParsed"]
  }, {
    "name": "vite:data-uri",
    "hooks": ["buildStart", "resolveId", "load"]
  }, {
    "name": "rollup-plugin-dynamic-import-variables",
    "hooks": ["transform"]
  }, {
    "name": "vite:asset-import-meta-url",
    "hooks": ["transform"]
  }, {
    "name": "vite:build-import-analysis",
    "hooks": ["resolveId", "load", "transform", "renderChunk", "generateBundle"]
  }, {
    "name": "vite:esbuild-transpile",
    "hooks": ["configResolved", "renderChunk"]
  }, {
    "name": "vite:terser",
    "hooks": ["renderChunk", "closeBundle"]
  }, {
    "name": "vite:reporter",
    "hooks": ["transform", "buildEnd", "renderStart", "renderChunk", "generateBundle", "writeBundle"]
  }, {
    "name": "vite:load-fallback",
    "hooks": ["load"]
  }]
```