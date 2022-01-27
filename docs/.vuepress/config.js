module.exports = {
  base: '/vuepress-quick-start/',
  title: 'vuepress-quick-start',
  description: 'vuepress-quick-start',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0 ,maximum-scale=1.0'
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
  dest: '.vuepress/dist',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    logo: '/favicon.png',
    nav: [{ text: '文档简介', link: '/guide/' }],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': ['']
    },
    lastUpdated: '上次更新：',
    repo: 'tlyboy/vuepress-quick-start',
    repoLabel: 'GitHub',
    docsRepo: 'tlyboy/vuepress-quick-start',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
}
