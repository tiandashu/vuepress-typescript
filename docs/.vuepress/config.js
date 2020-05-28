/*
 * @Descripttion: 
 * @version: 
 * @Author: tianlu.tian
 * @Date: 2020-05-28 11:01:35
 * @LastEditors: tianlu.tian
 * @LastEditTime: 2020-05-28 11:42:02
 */ 
module.exports = {
  port: 8083,
  title: 'TypeScript开发教程',
  base: '/vuepress-typeScript/', // 注意此处要和git 仓库名一致，否则会样式路径错误
  description: '目录',
  head: [
    ['link', { rel: 'icon', href: '/images/typescript.png' }]
  ],
  themeConfig: {
    // The navigation bar
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/tiandashu/vuepress-typeScript.git'
      }
    ],
    // The sidebar
    sidebar: [
      {
        title: '初识篇',
        collapsable: false,
        children: [
          'introduce/what-is-typescript',
          'introduce/install-typescript',
          'introduce/hello-typescript'
        ]
      },
      {
        title: '基础篇',
        collapsable: false,
        children: [
          'basics/basis-data-types',
          'basics/interface',
          'basics/function',
          'basics/class',
          'basics/class-and-interface',
          'basics/generics',
          'basics/type-check-mechanism',
          'basics/advanced-type'
        ]
      },
      {
        title: '工程篇',
        collapsable: false,
        children: [
          'project/import-export',
          'project/namespace',
          'project/declaration-merging',
          'project/identify-the-class-library',
          'project/declaration-syntax',
          'project/declaration-files',
          'project/compile-tools'
        ]
      },
      {
        title: '配置篇',
        collapsable: false,
        children: [
          'configuration/file-options',
          'configuration/compiler-options',
          'configuration/vscode-compiler'
        ]
      },
      {
        title: '实战篇',
        collapsable: false,
        children: [
          'actual/typescript-react',
          'actual/react-component-type',
          'actual/typescript-vue',
          'actual/vue-component-type',
          'actual/typescript-eslint',
          'actual/typescript-jest'
        ]
      }
    ],
    lastUpdated: 'Last Updated'
  }
}