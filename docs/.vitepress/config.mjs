import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "混元宝 | 只想让你混得更好",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 底部配置
    footer: {
      copyright: "copyright@ 2024 HunYuanBao",
    },
    // 搜索框设置
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索资源",
            buttonAriaLabel: "搜索资源",
          },
          modal: {
            noResultsText: "没有找到相关资源",
            resetButtonTitle: "清空搜索关键词",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '菜单', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
