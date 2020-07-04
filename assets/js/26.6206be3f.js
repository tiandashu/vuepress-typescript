(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{377:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"编译工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译工具"}},[t._v("#")]),t._v(" 编译工具")]),t._v(" "),a("p",[t._v("本篇主要介绍 ts-loader、awesome-typescript-loader 和 babel 分别编译 Typescript 的区别")]),t._v(" "),a("h2",{attrs:{id:"ts-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-loader"}},[t._v("#")]),t._v(" ts-loader")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.npmjs.com/package/ts-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-loader"),a("OutboundLink")],1),t._v(" 内部调用了 "),a("code",[t._v("tsc")]),t._v("，所以在使用 "),a("code",[t._v("ts-loader")]),t._v(" 时，会使用 "),a("code",[t._v("tsconfig.json")]),t._v(" 配置文件。")]),t._v(" "),a("h3",{attrs:{id:"提高构建速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提高构建速度"}},[t._v("#")]),t._v(" 提高构建速度")]),t._v(" "),a("p",[t._v("当项目中的代码变的越来越多，体积也越来越庞大时，项目编译时间也随之增加。这是因为 Typescript 的语义检查器必须在每次重建时检查所有文件。 "),a("code",[t._v("ts-loader")]),t._v(" 提供了一个 "),a("code",[t._v("transpileOnly")]),t._v(" 选项，它默认为 "),a("code",[t._v("false")]),t._v("，我们可以把它设置为 "),a("code",[t._v("true")]),t._v("，这样项目编译时就"),a("strong",[t._v("不会进行类型检查，也不会输出声明文件")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.tsx?$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              transpileOnly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们对一下 "),a("code",[t._v("transpileOnly")]),t._v(" 分别设置 "),a("code",[t._v("false")]),t._v(" 或 "),a("code",[t._v("true")]),t._v(" 的项目构建速度。如下：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run v1.12.3\n$ webpack --mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production --config ./build/webpack.config.js\nHash: 36308e3786425ccd2e9d\nVersion: webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.41")]),t._v(".0\nTime: 2482ms\nBuilt at: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("/20/2019 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":52:43 PM\n     Asset       Size  Chunks             Chunk Names\n    app.js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("932")]),t._v(" bytes       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\nindex.html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("338")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEntrypoint main "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app.js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ./src/index.ts "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nChild html-webpack-plugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" asset\n    Entrypoint undefined "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" index.html\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ./node_modules/html-webpack-plugin/lib/loader.js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("./index.html "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("489")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/buildin/global.js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("472")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/buildin/module.js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("497")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" hidden module\n✨  Done "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(".88s.\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" build\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" run v1.12.3\n$ webpack --mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("production --config ./build/webpack.config.js\nHash: e5a133a9510259e1f027\nVersion: webpack "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.41")]),t._v(".0\nTime: 726ms\nBuilt at: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("/20/2019 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(":54:20 PM\n     Asset       Size  Chunks             Chunk Names\n    app.js  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("932")]),t._v(" bytes       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  main\nindex.html  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("338")]),t._v(" bytes          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emitted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nEntrypoint main "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app.js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ./src/index.ts "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nChild html-webpack-plugin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.html"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" asset\n    Entrypoint undefined "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" index.html\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ./node_modules/html-webpack-plugin/lib/loader.js"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("./index.html "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("489")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/buildin/global.js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("472")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/buildin/module.js "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("497")]),t._v(" bytes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("built"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" hidden module\n✨  Done "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".40s.\n")])])]),a("p",[t._v("当 "),a("code",[t._v("transpileOnly")]),t._v(" 为 false 时，整体构建时间为 "),a("strong",[a("code",[t._v("4.88s")])]),t._v("\n，当 "),a("code",[t._v("transpileOnly")]),t._v(" 为 true 时，整体构建时间为 "),a("strong",[a("code",[t._v("2.40s")])])]),t._v(" "),a("p",[t._v("虽然构建速度提升了，但是有了一个弊端打包编译"),a("strong",[t._v("不会进行类型检查")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"fork-ts-checker-webpack-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-ts-checker-webpack-plugin"}},[t._v("#")]),t._v(" fork-ts-checker-webpack-plugin")]),t._v(" "),a("p",[t._v("这里官方推荐了一个解决方案，使用 "),a("a",{attrs:{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork-ts-checker-webpack-plugin"),a("OutboundLink")],1),t._v("，它在一个单独的进程上运行类型检查器，该插件在编译之间重用抽象语法树，并与TSLint共享这些树。可以通过多进程模式进行扩展，以利用最大的CPU能力。")]),t._v(" "),a("p",[t._v("需要注意的是，此插件使用 TypeScript 而不是 webpack 的模块解析，这一点非常重要。这意味着你必须正确设置 tsconfig.json。例如，如果您在 tsconfig.json 中设置文件：['./src/someFile.ts']，则此插件将仅检查 someFile.ts 的语义错误。这是为了构建性能。该插件的目标是尽可能快。有了 TypeScript 的模块解析，我们不必等待 webpack 编译文件（在编译过程中会遍历依赖图）-我们从一开始就拥有完整的文件列表。")]),t._v(" "),a("p",[t._v("要调试 TypeScript 的模块解析，可以使用 "),a("code",[t._v("tsc --traceResolution")]),t._v("命令。")]),t._v(" "),a("h4",{attrs:{id:"使用-fork-ts-checker-webpack-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-fork-ts-checker-webpack-plugin"}},[t._v("#")]),t._v(" 使用 fork-ts-checker-webpack-plugin")]),t._v(" "),a("p",[t._v("安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D fork-ts-checker-webpack-plugin\n")])])]),a("p",[t._v("webpack.config.js 中修改：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ForkTsCheckerWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fork-ts-checker-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.tsx?$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ts-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              transpileOnly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ForkTsCheckerWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样在构建的时候，既保证了构建速度，又会对其做类型检查。")]),t._v(" "),a("p",[t._v("它提供了更多的配置，如："),a("code",[t._v("reportFiles")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ForkTsCheckerWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  reportFiles"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/**/*.{ts,tsx}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这里表示只报告与这些全局模式匹配的文件的错误。更多选项可以自行查阅。")]),t._v(" "),a("h2",{attrs:{id:"awesome-typescript-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#awesome-typescript-loader"}},[t._v("#")]),t._v(" awesome-typescript-loader")]),t._v(" "),a("h3",{attrs:{id:"与-ts-loader-对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-ts-loader-对比"}},[t._v("#")]),t._v(" 与 ts-loader 对比")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.npmjs.com/package/awesome-typescript-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("atl"),a("OutboundLink")],1),t._v(" 更适合于 Babel 集成，当启用了 useBabel 和 useCache 标志时，typescript 的派发将被 Babel 替换并缓存，下次源文件和环境有相同的校验，我们可以完全跳过 typescript 和 Babel 的转换。")]),t._v(" "),a("li",[t._v("atl 能够将类型检查器和发射器发送到一个单独的进程，这也加快了类似热更新的开发场景。")]),t._v(" "),a("li",[t._v("不需要安装额外的插件。")])]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" awesome-typescript-loader\n")])])]),a("p",[t._v("webpack.config.js")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.tsx?$/i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-typescript-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        transpileOnly"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("atl 本身提供了检查插件 "),a("code",[t._v("CheckerPlugin")]),t._v("，检查 ts 语法错误。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" CheckerPlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-typescript-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n\nplugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CheckerPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("transpileOnly")]),t._v(" 设置为 true 时，"),a("code",[t._v("CheckerPlugin")]),t._v(" 将会无效")])]),t._v(" "),a("h2",{attrs:{id:"babel-编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-编译"}},[t._v("#")]),t._v(" babel 编译")]),t._v(" "),a("p",[t._v("TSC 与 Babel 对比")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("-")]),t._v(" "),a("th",[t._v("编译能力")]),t._v(" "),a("th",[t._v("类型检查")]),t._v(" "),a("th",[t._v("插件")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TSC")]),t._v(" "),a("td",[t._v("ts(x)、js(x) -> es3/5/6/...")]),t._v(" "),a("td",[t._v("有")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("Babel")]),t._v(" "),a("td",[t._v("ts(x)、js(x) -> es3/5/6/...")]),t._v(" "),a("td",[t._v("无")]),t._v(" "),a("td",[t._v("丰富")])])])]),t._v(" "),a("p",[t._v("Babel 没有类型检查机制，可以配合 typescript "),a("code",[t._v("tsc --watch")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"安装使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装使用"}},[t._v("#")]),t._v(" 安装使用")]),t._v(" "),a("p",[t._v("安装包")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  "@babel/cli": "^7.4.4",\n  "@babel/core": "^7.4.5",\n  "@babel/plugin-proposal-class-properties": "^7.4.4",\n  "@babel/plugin-proposal-object-rest-spread": "^7.4.4",\n  "@babel/preset-env": "^7.4.5",\n  "@babel/preset-typescript": "^7.3.3"\n')])])]),a("p",[a("code",[t._v("plugin-proposal-class-properties")]),t._v(" 支持 class、"),a("code",[t._v("plugin-proposal-object-rest-spread")]),t._v(" 支持对象解构赋值")]),t._v(" "),a("p",[t._v(".babelrc")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "presets": [\n    "@babel/env",\n    "@babel/preset-typescript"\n  ],\n  "plugins": [\n    "@babel/proposal-class-properties",\n    "@babel/proposal-object-rest-spread"\n  ]\n}\n')])])]),a("h3",{attrs:{id:"_4种书写方式-babel-无法编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4种书写方式-babel-无法编译"}},[t._v("#")]),t._v(" 4种书写方式 Babel 无法编译")]),t._v(" "),a("ol",[a("li",[t._v("命名空间")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("类型断言只允许使用 "),a("code",[t._v("as")])])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("常量枚举")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("默认导出")])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ol",[a("li",[t._v("如果没有使用过 Babel，应使用 TypeScript 自身编译器，可配合 ts-loader.")]),t._v(" "),a("li",[t._v("如果项目中已经安装使用了 Babel，可以安装 @babel/preset-typescript，配合 tsc 做类型检查.")]),t._v(" "),a("li",[t._v("两种编译工具不要混合使用.")])]),t._v(" "),a("h2",{attrs:{id:"链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链接"}},[t._v("#")]),t._v(" 链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dengwb1991/typescript-in-action/tree/master/base-typescript/fifth-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-loader、awesome-typescript-loader 示例"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dengwb1991/typescript-in-action/tree/master/base-typescript/ts-babel",target:"_blank",rel:"noopener noreferrer"}},[t._v("typescript-babel 示例"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);