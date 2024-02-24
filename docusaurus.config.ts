import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import fediverseUser from "remark-fediverse-user";
import remarkCorepass from "remark-corepass";
import remarkCorebc from "remark-corebc";
import math from "remark-math";
import katex from "rehype-katex";

const config: Config = {
  title: process.env.title || 'Blog',
  tagline: process.env.tagline || 'A New Sense of Integrity',
  favicon: '/img/favicon.png',

  url: process.env.url || 'https://blog.coreblockchain.net',
  baseUrl: '/',

  customFields: {
    ican: 'cb57bbbb54cdf60fa666fd741be78f794d4608d67109',
  },

  organizationName: process.env.org || 'Core Foundation',
  projectName: 'corebc-blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de-DE', 'ja-JP', 'es-ES', 'pt-BR', 'zh-CN', 'sk-SK'],
    localeConfigs: {
      'en-US': {
        label: 'English (US)',
      },
      'de-DE': {
        label: 'Deutsch',
      },
      'ja-JP': {
        label: '日本語',
      },
      'es-ES': {
        label: 'Español',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
      },
      'zh-CN': {
        label: '简体中文',
      },
      'sk-SK': {
        label: 'Slovenčina',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/core-coin/core-blog/tree/master/',
          path: 'blog',
          routeBasePath: '/',
          blogSidebarCount: 0,
          blogTitle: 'Blog news',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            copyright: `${process.env.org || 'Core Foundation'} ⛬ Copyright and related rights waived via CC0`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          remarkPlugins: [
            math,
            fediverseUser,
            remarkCorepass,
            remarkCorebc,
          ],
          rehypePlugins: [
            [
              katex,
              {
                output: 'mathml',
                strict: 'newLineInDisplayMode',
              },
            ],
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      { name: 'description', content: 'A New Sense of Integrity' },
      { property: 'og:title', content: 'Core Blog' },
      { property: 'og:description', content: 'A New Sense of Integrity' },
      { property: 'og:type', content: 'website' },
      {
        name: "keywords",
        content: "core, blog, corecoin, core blockchain, core coin, core foundation, core foundation",
      },
      { property: 'ican:xcb', content: 'cb57bbbb54cdf60fa666fd741be78f794d4608d67109' },
      { name: "theme-color", content: "#3b9a3e"},
      { name: "apple-mobile-web-app-capable", content: "yes"},
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent"},
    ],
    headTags: [
      {
        tagName: "link",
        attributes: {
          rel: "manifest",
          href: "/manifest.json",
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "generator",
          content: "CoreWeb Generator",
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'CORE FOUNDATION',
          url: 'https://coreblockchain.net',
          logo: 'https://blog.coreblockchain.net/img/logo.svg',
        }),
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Blog',
      logo: {
        alt: 'Blog',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/tags',
          label: 'Tags',
          position: 'left'
        },
        {
          to: '/archive',
          label: 'Archive',
          position: 'left'
        },
        {
          href: 'https://github.com/core-coin',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Latest articles',
              to: '/',
            },
            {
              label: 'Tags',
              to: '/tags',
            },
            {
              label: 'Archive',
              to: '/archive',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Core Website',
              href: 'https://coreblockchain.net',
            },
            {
              label: 'Core Blog',
              href: 'https://blog.coreblockchain.net',
            },
            {
              label: 'Dev Portal',
              href: 'https://dev.coreblockchain.net',
            },
            {
              label: 'Blockindex',
              href: 'https://blockindex.net',
            },
            {
              label: 'Payto',
              href: 'https://payto.money',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Core ◆ Talk',
              href: 'https://coretalk.space',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/core-coin',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/SCxmFr5Pwp',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/CoreCoinCC',
            },
            {
              label: '𝕏',
              href: 'https://x.com/corecoincc',
            },
          ],
        },
      ],
      copyright: `${process.env.org || 'Core Foundation'} ⛬ Copyright and related rights waived via CC0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'M0QDB2GLJF',
      apiKey: '3f55dea7b27fe168448d76b9ec202f47',
      indexName: 'coreblockchain',
      contextualSearch: true,
      searchPagePath: 'search',
      searchParameters: {
        facetFilters: ['language:en'],
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
