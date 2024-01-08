# koa项目实战

【杰哥课堂】-项目实战-Node+Koa2从零搭建通用API服务

视频地址：<https://www.bilibili.com/video/BV13A411w79h/>

源码下载：<https://github.com/jj112358/node-api>

## 项目搭建

### 初始化

#### NPM 

```
npm init -y
```

#### GIT 
```
git init
```


#### gitignore

```
node_modules
```

## 搭建项目

安装koa

```
npm install koa
```
V2.13


 根目录 /src

 入口   main.js

```
const Koa = require('koa')

app.use()

const app  = new Koa()

app.listen(3000, ()=>{
    console.log('server is runing on ')
})
```



