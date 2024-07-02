import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  lang: 'zh-CN',
  title: "Firefly Bot Docs",
  description: "流萤机器人文档站",
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: {
      level: [2,4],
      label: '当前页面大纲',
    },
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    footer: {
      message: 'TRSS-Yunzai | 星环互动 | GitHub提供托管服务',
      copyright: 'Copyright © 2023-2024 present  Sur方糖',
    },
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],


    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      },
      {
        text: '功能篇',
        items: [
          { text: '原神', link: '/原神'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})