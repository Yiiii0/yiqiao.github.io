#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取命令行参数
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Usage: node add-rambling.js "content" "tag" [date]');
  console.log('Example: node add-rambling.js "This is my thought" "AI" "2025-09-21"');
  process.exit(1);
}

const content = args[0];
const tag = args[1];
const date = args[2] || new Date().toISOString().split('T')[0]; // 默认今天

// 读取现有数据
const ramblingPath = path.join(__dirname, '../src/data/rambling.json');
const ramblingData = JSON.parse(fs.readFileSync(ramblingPath, 'utf8'));

// 创建新条目
const newEntry = {
  date,
  content,
  tag
};

// 添加到数组开头（最新的在前面）
ramblingData.unshift(newEntry);

// 写回文件
fs.writeFileSync(ramblingPath, JSON.stringify(ramblingData, null, 2));

console.log('✅ Rambling added successfully!');
console.log('📝 Content:', content);
console.log('🏷️ Tag:', tag);
console.log('📅 Date:', date);
console.log('');
console.log('💡 Next steps:');
console.log('1. git add .');
console.log('2. git commit -m "Add new rambling"');
console.log('3. git push');
