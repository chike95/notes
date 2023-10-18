#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build
rm -rf ../blog/*

# 将build生成的dist目录拷贝至github.io文件夹（blog）
cp -rf docs/.vuepress/dist/* ../blog/

# git初始化，推送数据
git init
git add -A
git commit -m 'deploy'
# 推送到github
git push -f git@github.com:chike95/chike95.github.io.git main