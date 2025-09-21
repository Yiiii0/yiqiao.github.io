#!/bin/bash

# 检查参数
if [ $# -lt 2 ]; then
    echo "Usage: $0 'content' 'tag' [date]"
    echo "Example: $0 'This is my thought' 'AI' '2025-09-21'"
    exit 1
fi

CONTENT="$1"
TAG="$2"
DATE="${3:-$(date +%Y-%m-%d)}"

echo "🚀 Adding new rambling..."
echo "📝 Content: $CONTENT"
echo "🏷️ Tag: $TAG"
echo "📅 Date: $DATE"

# 添加rambling
node scripts/add-rambling.js "$CONTENT" "$TAG" "$DATE"

# Git操作
echo ""
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Add new rambling: $(echo "$CONTENT" | cut -c1-50)..."
git push

echo ""
echo "✅ Done! Your rambling has been added and deployed!"
echo "🌐 Check your website in a few minutes: https://yiiii0.github.io/yiqiao_digital_home/"
