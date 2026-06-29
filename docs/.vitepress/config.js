export default {
  title: 'Sunrise Design System',
  description: '曦望设计系统 - Token 文档',
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '🌅',
    siteTitle: 'Sunrise Design System',
    nav: [
      { text: '首页', link: '/' },
      { text: 'Token', link: '/tokens/' },
      { text: '颜色', link: '/colors/' },
      { text: '字体', link: '/typography/' },
      { text: '间距', link: '/spacing/' },
      { text: '其他', link: '/others/' }
    ],
    sidebar: {
      '/tokens/': [
        {
          text: 'Token 文档',
          items: [
            { text: '概览', link: '/tokens/' },
            { text: '颜色 Token', link: '/tokens/colors' },
            { text: '字体 Token', link: '/tokens/typography' },
            { text: '间距 Token', link: '/tokens/spacing' },
            { text: '其他 Token', link: '/tokens/others' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhao851125-png/sunrise-design-system' }
    ],
    footer: {
      message: 'Sunrise Design System v1.0',
      copyright: 'Copyright © 2026'
    }
  }
}
