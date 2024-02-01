#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
rm -rf ../chike95.github.io/*

# 将build生成的dist目录拷贝至github.io文件夹（chike95.github.io）
cp -rf docs/.vuepress/dist/* ../chike95.github.io/

