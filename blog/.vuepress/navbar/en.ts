import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  "/",
  { text: "Articles", link: "/article/" },
  { text: "Categories", link: "/category/" },
  { text: "Timeline", link: "/timeline/" },
  { text: "Tags", link: "/tag/" },
]);
