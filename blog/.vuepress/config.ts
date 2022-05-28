import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import path from "path";

export default defineUserConfig({
  base: "/",

  dest: "./blog/.vuepress/dist",

  head: [
    ["link", { rel: "shortcut icon", type: "image/png", href: `/favicon.png` }],
    ["meta", { property: "wallet:xcb", content: "cb57bbbb54cdf60fa666fd741be78f794d4608d67109" }],
    ["meta", { name: "description", content: "Core Blockchain Blog" }],
    ["meta", { property: "og:title", content: "Core Blog" }],
    ["meta", { property: "og:description", content: "Core Blockchain Blog" }],
    ["meta", { property: "og:type", content: "website" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "Core Blog",
      description: "Core Blockchain Blog",
    },
    "/sk/": {
      lang: "sk-SK",
      title: "Core Blog",
      description: "Core Blockchain Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "核心博客",
      description: "核心区块链博客",
    },
  },

  alias: {
    "@img": path.resolve(__dirname, "../images"),
  },

  theme: hopeTheme({
    hostname: "https://blog.coreblockchain.cc",

  	author: {
  		name: "Core Foundation",
  		url: "https://coreblockchain.cc",
  	},

  	iconPrefix: "iconfont icon-",

  	logo: "/logo.svg",

  	repo: "https://github.com/core-coin",

  	repoDisplay: true,

  	navbarAutoHide: "always",

  	pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  	blog: {},

  	sidebar: false,

  	docsRepo: "https://github.com/core-coin/web-blog",

  	docsBranch: "master",

  	copyright: "Core Foundation // Copyright and related rights waived via CC0.",

  	locales: {
  		"/": {
  			// navbar
  			navbar: navbar.en,

  			footer:
  				"<a href='https://coreblockchain.cc' target='_blank'>Core web</a> &bull; <a href='https://dev.coreblockchain.cc' target='_blank'>Dev portal</a> &bull; <a href='https://coretalk.info' target='_blank'>Core ◆ Talk</a> &bull; <a href='https://cip.coreblockchain.cc' target='_blank'>CIP</a> &bull; <a href='https://github.com/core-coin' target='_blank'>GitHub</a> &bull; <a href='https://twitter.com/corecoincc' target='_blank'>Twitter</a>",

  			displayFooter: true,
        blogLocales: {
          category: "Locale_En",
          tag: "en"
        },
  			blog: {
  				description: "Core Foundation",
  			},
  		},

  		/**
  		 * Chinese locale config
  		 */
  		"/zh/": {
  			// navbar
  			navbar: navbar.zh,

  			footer:
  				"<a href='https://coreblockchain.cc' target='_blank'>核心网络</a> &bull; <a href='https://dev.coreblockchain.cc' target='_blank'>开发门户</a> &bull; <a href='https://coretalk.info' target='_blank'>核 ◆ 讲话</a> &bull; <a href='https://cip.coreblockchain.cc' target='_blank'>CIP</a> &bull; <a href='https://github.com/core-coin' target='_blank'>GitHub</a> &bull; <a href='https://twitter.com/corecoincc' target='_blank'>Twitter</a>",

  			displayFooter: true,
        blogLocales: {
          category: "Locale_Zh",
          tag: "zh"
        },
  			blog: {
  				description: "一个前端开发者",
  			},
  		},

  		/**
  		 * Slovak locale config
  		 */
  		"/sk/": {
  			// navbar
  			navbar: navbar.sk,

  			footer:
  				"<a href='https://coreblockchain.cc' target='_blank'>Core web</a> &bull; <a href='https://dev.coreblockchain.cc' target='_blank'>Dev portál</a> &bull; <a href='https://coretalk.info' target='_blank'>Core ◆ Diskusia</a> &bull; <a href='https://cip.coreblockchain.cc' target='_blank'>CIP</a> &bull; <a href='https://github.com/core-coin' target='_blank'>GitHub</a> &bull; <a href='https://twitter.com/corecoincc' target='_blank'>Twitter</a>",

  			displayFooter: true,
        blogLocales: {
          category: "Locale_Sk",
          tag: "sk"
        },
  			blog: {
  				description: "Core Nadácia",
  			},
  		},
  	},

  	encrypt: {
  		config: {},
  	},

  	plugins: {
  		blog: {
  			autoExcerpt: true,
  		},

  		comment: {
  			type: "giscus",
  			repo: "core-coin/web-blog",
        mapping: "title",
  			repoId: "MDEwOlJlcG9zaXRvcnkyOTg4MDk2NTM=",
  			category: "General",
  			categoryId: "DIC_kwDOEc95Nc4COMVF",
        inputPosition: "top",
        loading: "lazy",
  		},

  		feed: {
  			json: true,
  			atom: true,
  			rss: true,
  		},

  		mdEnhance: {
  			enableAll: true,
  			presentation: {
  				plugins: ["highlight", "math", "search", "notes", "zoom"],
  			},
  		},
  	},

  	themeColor: {
  		blue: "#2196f3",
  		red: "#f26d6d",
  		green: "#46b549",
  		orange: "#fb9b5f",
  	},
  }),
});
