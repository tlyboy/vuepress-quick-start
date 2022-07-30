module.exports = {
  title: 'VuePress 快速上手',
  description: '一个简单的 VuePress 应用',
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
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress 快速上手',
      description: '一个简单的 VuePress 应用'
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
}
