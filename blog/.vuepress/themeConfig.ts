import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";

export default defineThemeConfig({
	hostname: "https://blog.coreblockchain.cc",

	author: {
		name: "Core Foundation",
		url: "https://coreblockchain.cc",
	},

	iconPrefix: "iconfont icon-",

	logo: "/logo.svg",

	repo: "https://github.com/core-coin/go-core",

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
			repo: "vuepress-theme-hope/giscus-discussions",
			repoId: "MDEwOlJlcG9zaXRvcnkyOTg4MDk2NTM",
			category: "General",
			categoryId: "DIC_kwDOEc95Nc4COMVF",
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
});
