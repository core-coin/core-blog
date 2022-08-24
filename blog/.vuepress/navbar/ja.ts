import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  "/",
  { text: "記事", link: "/article/" },
  { text: "カテゴリー", link: "/category/" },
  { text: "タイムライン", link: "/timeline/" },
  { text: "タグ", link: "/tag/" },
]);
