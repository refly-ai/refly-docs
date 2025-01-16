import { defineConfig } from "vitepress";

// Single navigation item
const nav = [{ text: "Refly", link: "https://refly.ai" }];

// Sidebar translations
const sidebar = {
  en: [
    {
      text: "Guide",
      items: [{ text: "Getting Started", link: "/guide/getting-started" }],
    },
    {
      text: "Community",
      items: [{ text: "Feedback Group", link: "/community/feedback-group" }],
    },
    {
      text: "Changelog",
      items: [
        { text: "版本 0.2.1", link: "/changelog/v0.2.1" },
        { text: "版本 0.2.0", link: "/changelog/v0.2.0" },
        { text: "版本 0.1.2", link: "/changelog/v0.1.2" },
        { text: "版本 0.1.1", link: "/changelog/v0.1.1" },
      ],
    },
  ],
  zh: [
    {
      text: "指南",
      items: [{ text: "快速开始", link: "/zh/guide/getting-started" }],
    },
    {
      text: "社区",
      items: [{ text: "反馈群", link: "/zh/community/feedback-group" }],
    },
    {
      text: "更新日志",
      items: [
        { text: "版本 0.2.1", link: "/zh/changelog/v0.2.1" },
        { text: "版本 0.2.0", link: "/zh/changelog/v0.2.0" },
        { text: "版本 0.1.2", link: "/zh/changelog/v0.1.2" },
        { text: "版本 0.1.1", link: "/zh/changelog/v0.1.1" },
      ],
    },
  ],
};

export default defineConfig({
  // Site metadata
  title: "Refly Docs",
  description: "Refly Documentation",

  // i18n configuration
  locales: {
    root: {
      label: "English",
      lang: "en",
      title: "Refly Docs",
      description: "Refly Documentation",
      themeConfig: {
        nav,
        sidebar: sidebar.en,
        siteTitle: "Refly Docs",
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh",
      title: "Refly 文档",
      description: "Refly 开发文档",
      themeConfig: {
        nav,
        sidebar: sidebar.zh,
        siteTitle: "Refly 文档",
      },
    },
  },

  themeConfig: {
    // Logo configuration
    logo: {
      light: "/logo/logo.svg",
      dark: "/logo/logo.svg",
    },

    // Social links
    socialLinks: [{ icon: "github", link: "https://github.com/refly-ai" }],

    // Language selection
    langMenuLabel: "Change Language",
  },
});
