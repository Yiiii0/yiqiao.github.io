# Rambling Blogs

这个文件夹存放所有 blog 类型的 rambling 文章（markdown 格式）。

## 如何添加新的 Blog

### 步骤 1: 创建 markdown 文件

在 `src/content/blogs/` 目录下创建一个新的 `.md` 文件，例如 `my-new-blog.md`

### 步骤 2: 使用脚本添加条目

```bash
node scripts/add-rambling.js blog "文章标题" "简短摘要（一句话）" "my-new-blog.md" "标签" [日期]
```

**参数说明：**
- `blog`: 类型（必填）
- `"文章标题"`: 在列表和模态框中显示的标题
- `"简短摘要"`: 显示在列表中的摘要（一句话）
- `"my-new-blog.md"`: markdown 文件名（必须已存在）
- `"标签"`: AI / personal / tech / work
- `[日期]`: 可选，格式 YYYY-MM-DD，默认今天

**示例：**
```bash
node scripts/add-rambling.js blog "如何判断B端SaaS有没有护城河" "3天观察提炼的判断框架" "ai-startup-moat.md" "personal" "2024-10-02"
```

## 如何添加 Snippet

Snippet 不需要单独的文件：

```bash
node scripts/add-rambling.js snippet "这是一句话的想法" "AI" [日期]
```

## 文件命名建议

- 使用小写字母和连字符
- 简洁且有意义
- 例如：`ai-startup-moat.md`, `product-thinking.md`

## Markdown 支持的语法

当前支持的 markdown 特性：
- 标题 (`#`, `##`, `###`)
- 加粗 (`**text**`)
- 列表 (`- item`)
- 链接 (`[text](url)`)
- 段落分隔

如需更多 markdown 特性支持，可以扩展 `Rambling.astro` 中的 `markdownToHtml` 函数。
