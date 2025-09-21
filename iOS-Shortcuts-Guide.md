# 📱 iOS Shortcuts 自动化指南

## 🎯 目标
通过iPhone的Shortcuts应用，一键添加Rambling内容并自动部署到网站。

## 🔧 使用方法

### 方法一：GitHub API Shortcut（推荐）

1. **获取GitHub Personal Access Token**
   - 访问：https://github.com/settings/tokens
   - 点击"Generate new token (classic)"
   - 勾选 `repo` 权限
   - 复制生成的token

2. **创建iOS Shortcut**
   - 打开"快捷指令"应用
   - 点击右上角"+"创建新快捷指令
   - 按以下步骤添加动作：

#### Shortcut动作序列：

1. **Ask for Input** (文本)
   - 提示："输入你的想法"
   - 输入类型：文本
   - 允许多行：开启

2. **Choose from Menu**
   - 选项：AI, personal, tech, work
   - 提示："选择标签"

3. **Get Current Date**
   - 格式：自定义格式 `yyyy-MM-dd`

4. **Text**
   ```json
   {
     "date": "[第3步的日期]",
     "content": "[第1步的文本]", 
     "tag": "[第2步选择的标签]"
   }
   ```

5. **Get Contents of URL**
   - URL: `https://api.github.com/repos/Yiiii0/yiqiao_digital_home/contents/src/data/rambling.json`
   - 方法：GET
   - Headers：
     - Authorization: `token [你的GitHub token]`
     - Accept: `application/vnd.github.v3+json`

6. **Get Value for Key** (从第5步结果)
   - 键：content

7. **Base64 Decode** (第6步结果)

8. **Get Text from Input** (第7步结果)

9. **Text** (修改JSON - 这里需要用JavaScript动作)
   ```javascript
   // 这部分需要在Shortcuts中用"Run JavaScript on Web Page"实现
   const existingData = JSON.parse(text);
   const newEntry = {变量：新条目JSON};
   existingData.unshift(newEntry);
   return JSON.stringify(existingData, null, 2);
   ```

10. **Base64 Encode** (修改后的JSON)

11. **Text** (创建更新请求体)
    ```json
    {
      "message": "Add new rambling via iOS Shortcuts",
      "content": "[第10步的base64内容]",
      "sha": "[第5步结果中的sha值]"
    }
    ```

12. **Get Contents of URL** (更新文件)
    - URL: `https://api.github.com/repos/Yiiii0/yiqiao_digital_home/contents/src/data/rambling.json`
    - 方法：PUT
    - Headers：
      - Authorization: `token [你的GitHub token]`
      - Accept: `application/vnd.github.v3+json`
    - 请求体：第11步的JSON

13. **Show Notification**
    - 标题："✅ Rambling已添加"
    - 内容："你的想法已成功发布到网站！"

### 方法二：简化版本（推荐新手）

创建一个简单的Shortcut，只负责收集信息并发送到你的邮箱：

1. **Ask for Input** (收集想法)
2. **Choose from Menu** (选择标签) 
3. **Mail** 
   - 收件人：你的邮箱
   - 主题：New Rambling
   - 正文：包含内容和标签

然后你可以在电脑上快速处理这些邮件。

## 🚀 本地使用方法

你也可以在电脑上直接使用：

```bash
# 添加新的rambling
npm run add-rambling "你的想法内容" "标签" "日期(可选)"

# 或者使用一键脚本（自动提交和推送）
./scripts/add-rambling-and-push.sh "你的想法内容" "标签" "日期(可选)"
```

## 📋 可用标签
- AI
- personal  
- tech
- work

## 🔍 验证
添加完成后，访问你的网站查看：
https://yiiii0.github.io/yiqiao_digital_home/

---

💡 **小贴士**：建议先用方法二测试，熟悉流程后再实现方法一的GitHub API版本。
