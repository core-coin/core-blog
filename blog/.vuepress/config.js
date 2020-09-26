module.exports = {
  title: 'CORE Blog',
  description: 'CORE FOUNDATION Blog',
  base: '/',
  dest: 'dist/',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#303030' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'CORE Blog feed', href: '/rss.xml' }],
  ],
  // Set default language
  theme: 'ououe',
  themeConfig: {
    logo: '/img/corelogo.svg',
    cover: '/img/core-banner.png',
    backgroundImage: false,
    repo: 'https://github.com/core-coin/web-blog',
    editLinks: true,
    docsDir: 'https://github.com/core-coin/web-blog/blog',
    editLinkText: 'Propose changes',
    lastUpdated: true,
    postTime: {
      createTime: 'Created',
      lastUpdated: 'Updated'
    },
    nav: [
      { text: 'CORE Blog', link: '/' },
      { text: 'Core ◆ Talk', link: 'https://coretalk.info', target:'_blank' },
      { text: 'Blockchain', link: 'https://coreblockchain.cc', target:'_blank' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Core Blockchain', link: 'https://coreblockchain.cc', target:'_blank' },
      { text: 'Core ◆ Talk', link: 'https://coretalk.info', target:'_blank' },
      { text: 'CIP', link: 'https://cip.coreblockchain.cc', target:'_blank' },
      { text: 'RSS', link: 'https://blog.coreblockchain.cc/rss.xml', target:'_blank' },
    ],
  },
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
      hostname: 'https://blog.coreblockchain.cc',
      changefreq: 'weekly'
    }],
    ['vuepress-plugin-rss', {
      base_url: '/',
      site_url: 'https://blog.coreblockchain.cc',
      count: 20,
      copyright: 'CORE FOUNDATION'
    }],
  ]
}
