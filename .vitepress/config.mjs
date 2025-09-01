import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NextAI",
  description: "NextAI  使用说明",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    returnToTopLabel: '返回顶部',
    notFound:{
      title: '页面未找到',
      quote: '但如果你不改变方向，持续前行，终将到达你所前往的地方。',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
    docFooter:{
      prev: '上一页',
      next: '下一页'
    },
    outline:{
      label: '目录'
    },
    darkModeSwitchLabel: '主题',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用说明', link: '/use-guide/' },
    ],

    sidebar: [
      {
        text: '使用说明',
        items: [
          { text: 'API 配置', link: '/use-guide/api-config' },
          { text: '功能介绍', link: '/use-guide/features' },
          { text: '更新日志', link: '/use-guide/changelog' },
          { text: '常见问题', link: '/use-guide/faq' },
          { text: '反馈', link: '/use-guide/feedback' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'appgallery', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
