module.exports = {
  base: '/vuepress-quick-start/',
  title: 'VuePress 快速上手',
  description: 'VuePress 快速上手',
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
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: '/hero.png',
    nav: [{ text: '文档简介', link: '/guide/' }],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': ['']
    },
    lastUpdated: '上次更新',
    repo: 'tlyboy/vuepress-quick-start',
    repoLabel: 'GitHub',
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
