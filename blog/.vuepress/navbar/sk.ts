import { navbar } from "vuepress-theme-hope";

export const sk = navbar([
  "/",
  { text: "Články", link: "/article/" },
  { text: "Kategórie", link: "/category/" },
  { text: "Časová os", link: "/timeline/" },
  { text: "Tagy", link: "/tag/" },
]);
