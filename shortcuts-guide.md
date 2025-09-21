# iOS Shortcuts 自动化指南

## 创建 "添加 Rambling" Shortcut

### 步骤1: 创建基础Shortcut
1. 打开 iOS **Shortcuts** app
2. 点击 **"+"** 创建新的Shortcut
3. 命名为 "添加 Rambling"

### 步骤2: 添加输入操作
1. 搜索并添加 **"Ask for Input"** (询问输入)
   - Input Type: Text
   - Prompt: "输入你的Rambling内容"
   - Allow Multiline: ON

2. 搜索并添加 **"Choose from Menu"** (从菜单选择)
   - Prompt: "选择标签"
   - 添加选项: AI, personal, tech, work

3. 搜索并添加 **"Get Current Date"** (获取当前日期)

4. 搜索并添加 **"Format Date"** (格式化日期)
   - Format: Custom
   - Custom Format: yyyy-MM-dd

### 步骤3: 生成代码
1. 搜索并添加 **"Text"** 操作
2. 在文本框中输入:
```
    {
      date: "[格式化日期]",
      content: "[输入内容]",
      tag: "[选择的标签]"
    },
```

3. 搜索并添加 **"Copy to Clipboard"** (复制到剪贴板)

### 步骤4: 使用
1. 运行Shortcut
2. 输入内容和选择标签
3. 代码自动复制到剪贴板
4. 在GitHub手机app中编辑config.ts文件
5. 粘贴代码到rambling数组最前面

## 高级版本: 直接提交到GitHub

如果你想要更自动化，可以使用GitHub的Personal Access Token来直接提交：

### 需要的操作:
1. **Get Contents of URL** - 获取当前config.ts内容
2. **Text** - 修改内容
3. **Get Contents of URL** - PUT请求更新文件

### GitHub API 端点:
- GET: https://api.github.com/repos/Yiiii0/yiqiao_digital_home/contents/src/config.ts
- PUT: https://api.github.com/repos/Yiiii0/yiqiao_digital_home/contents/src/config.ts

### Headers:
- Authorization: token YOUR_GITHUB_TOKEN
- Accept: application/vnd.github.v3+json
