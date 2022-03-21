import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

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

  themeConfig,
});
