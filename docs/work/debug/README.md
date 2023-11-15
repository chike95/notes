# 调试系统

前端：vue vite element-plus axios


后端：node koa2 mysql sequelize axios echarts

node16 + npm9.8.1

## 最小调试系统

构建一个简单的TCP服务，用于获取数据

构建一个简单的HTTP服务，用于展示数据

### 构建TCP服务



### 构建HTTP服务



## 前端

#### vite构建vue3项目

vite官网：<https://cn.vitejs.dev/guide/>

```sh
cd D:\project\tl-debug

npm create vite@latest

cd tl-vue3

npm install

npm run dev

```

报错
```
error when starting dev server:
Error: listen EACCES: permission denied 127.0.0.1:5173
```
原因：开了代理

Vite 设置 @ 指向 src 目录

@ 引入vue文件 需要加 .vue 后缀 js 不需要

打开vite.config.js文件，在文件中添加以下代码：

```js
import { defineConfig } from 'vite'
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

#### 引入element-plus

element-plus官网：<https://element-plus.org/zh-CN/>

安装

```sh
npm install element-plus --save
 npm install @element-plus/icons-vue
```

引入
```js
import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus 和图标
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
```



#### vue-router

vue-router官网：<https://router.vuejs.org/zh/guide/>

一、安装

```sh
cnpm install vue-router
```

二、src目录下创建router目录，创建index.js

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/home/Home.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
```

三、main.js中引入

```js
// 引入路由
import router from './router'

app.use(router)
```

四、在App.vue中使用
```html
<template>
    <RouterView></RouterView>
</template>

#### 页面布局

