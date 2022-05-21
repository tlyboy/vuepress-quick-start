import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: 'VuePress 快速上手',
  description: 'vuepress-quick-start 是一个简单的 vuepress 入门项目',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/favicon.png'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress 快速上手',
      description: 'vuepress-quick-start 是一个简单的 vuepress 入门项目'
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档简介',
        link: '/guide/'
      }
    ],
    sidebar: 'auto',
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    repo: 'tlyboy/vuepress-quick-start',
    docsRepo: 'tlyboy/vuepress-quick-start',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  markdown: {
    lineNumbers: true
  }
})
