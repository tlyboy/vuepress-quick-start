import { defineConfig } from 'vuepress/config'

export default defineConfig({
  base: '/vuepress-quick-start/',
  description: 'vuepress-quick-start 是一个简单的 vuepress 入门项目',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
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
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    docsBranch: 'main',
    docsDir: 'docs',
    docsRepo: 'tlyboy/vuepress-quick-start',
    editLinkText: '在 GitHub 上编辑此页',
    editLinks: true,
    lastUpdated: '上次更新',
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档简介', link: '/guide/' }
    ],
    repo: 'tlyboy/vuepress-quick-start',
    sidebar: {},
    sidebarDepth: 2,
    smoothScroll: true
  },
  title: 'VuePress 快速上手'
})
