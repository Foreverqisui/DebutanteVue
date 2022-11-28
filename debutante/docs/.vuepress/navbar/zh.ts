import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  { text: "演示", icon: "discover", link: "/zh/demo/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "笔记",
        icon: "edit",
        prefix: "notes/",
        children: [
          { text: "力扣",icon: "edit", link: "leetCode"},
          { text: "计网",icon: "edit", link: "CNET"},
          { text: "Redis",icon: "edit", link: "redis"},
          { text: "Spring",icon: "edit", link: "Spring"},
          {text: "SpringBoot",icon: "edit", link: "SpringBoot"},
          { text:"操作系统",icon: "edit", link: "os"},
          {text:"并发",icon: "edit", link: "并发"},
          { text:"跨界",icon: "edit", link: "novel"},
          { text:"unity",icon: "edit", link: "unity"}
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
