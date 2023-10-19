#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
rm -rf ../blog/*

# 将build生成的dist目录拷贝至github.io文件夹（blog）
cp -rf docs/.vuepress/dist/* ../blog/

