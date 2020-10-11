/** Feed **/
const feed_options = {
  canonical_base: 'https://blog.coreblockchain.cc',
  generator: 'coreblog',
  favicon: 'https://blog.coreblockchain.cc/favicon.ico',
  link: 'https://blog.coreblockchain.cc',
  copyright: 'CC0, Core Blog',
  posts_directories: ['/posts/'],
  rss: true,
  atom: true,
  json: true,
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Core Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'CORE FOUNDATION Blog',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#303030' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'ououe',
  themeConfig: {
    logo: '/img/corelogo.svg',
    cover: '/img/core-banner.png',
    backgroundImage: false,
    repo: 'https://github.com/core-coin/web-blog',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Propose changes',
    lastUpdated: true,
    dateFormat: 'YYYY-MM-DD',
    postTime: {
      createTime: 'Created',
      lastUpdated: 'Updated'
    },
    nav: [
      { text: 'CORE Blog', link: '/' },
      { text: 'Core ◆ Talk', link: 'https://coretalk.info', target:'_blank' },
      { text: 'Blockchain', link: 'https://coreblockchain.cc', target:'_blank' },
      { text: 'About', link: '/about/' },
    ],
    footer: [
      { text: 'Core Blockchain', link: 'https://coreblockchain.cc', target:'_blank' },
      { text: 'Core ◆ Talk', link: 'https://coretalk.info', target:'_blank' },
      { text: 'CIP', link: 'https://cip.coreblockchain.cc', target:'_blank' },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'css-prefers-color-scheme/postcss',
    'img-lazy',
    'reading-progress',
    ['blog-multidir', {
      postsDir: {
        posts: 'blog/:year/:month/:day/:slug'
      }
    }],
    ['sitemap', {
      hostname: 'https://blog.coreblockchain.cc'
    }],
    ['feed', feed_options],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
  ]
}
