export const translations = {
  en: {
    // Header
    about: "About",
    rambling: "Rambling",
    workExperience: "Work Experience",
    researchTA: "Research & TA",
    education: "Education",
    projects: "Projects",

    // About
    aboutMeTitle: "About Me",
    keywords: "Key words",
    techSkills: "Tech Skills",

    // Rambling
    ramblingTitle: "Some Rambling",
    ramblingDescription: "Quick thoughts about myself or AI from recent learning, listening, and building.",
    aiDisclaimer: "Content may be AI-assisted.",
    allTypes: "All Types",
    snippets: "Snippets",
    blogs: "Blogs",
    allTags: "All Tags",
    readMore: "Read more",
    scrollForMore: "Scroll for more",
    snippet: "Snippet",
    blog: "Blog",
  },
  zh: {
    // Header
    about: "关于",
    rambling: "随想",
    workExperience: "工作经历",
    researchTA: "研究 & 助教",
    education: "教育经历",
    projects: "项目",

    // About
    aboutMeTitle: "关于我",
    keywords: "关键词",
    techSkills: "技术栈",

    // Rambling
    ramblingTitle: "一些随想",
    ramblingDescription: "关于自己或 AI 的一些想法，来自最近的学习、倾听和实践。",
    aiDisclaimer: "内容可能由 AI 协助生成。",
    allTypes: "全部类型",
    snippets: "片段",
    blogs: "博客",
    allTags: "全部标签",
    readMore: "阅读更多",
    scrollForMore: "向下滚动查看更多",
    snippet: "片段",
    blog: "博客",
  }
};

export type Language = 'en' | 'zh';

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}
