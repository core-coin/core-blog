import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/",
  { text: "文章", link: "/article/" },
  { text: "类别", link: "/category/" },
  { text: "时间线", link: "/timeline/" },
  { text: "标签", link: "/tag/" },
]);
