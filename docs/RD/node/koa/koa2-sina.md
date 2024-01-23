# 实战：从零模拟新浪微博

Node.js-Koa2框架生态实战－从零模拟新浪微博

“双越”老师出品，纯实战的Node.js进阶课程

地址：<https://coding.imooc.com/class/388.html>

## 一、项目分析

课程涉及的知识点

![Alt text](./img/study.png)

### 1.1 项目架构

![Alt text](./img/jiagou.png)

### 1.2 课程安排

主要包含六个方面的内容：

    技术选型

    知识点串讲

    技术方案设计

    功能开发

    线上环境

    总结最佳实践

#### 1.2.1 技术选型

* 框架

* 存储和缓存

* 用户认证

#### 1.2.2 知识点串讲

* koa2 和 ejs模板

* mysql 和 sequelize

* redis

* session 和 jwt

* jest 单元测试

* eslint 和 inspect debug


#### 1.2.3 技术方案设计

* 架构设计

* 接口和路由

* 数据表和存储模型


#### 1.2.4 功能开发

* 用户：登录、注册、用户设置、粉丝和关注

* 微博：发布、列表（首页、个人主页、广场页）

* @ 功能： @某人、回复、接受@我的消息

#### 1.2.5 线上环境

* pm2 和多线程

* nginx 和反向代理

* 日志

#### 1.2.6 总结最佳实践

* 项目结构

* 错误处理

* 代码风格

* 质量保证

* 安全

* 线上环境


## 二、技术选型和知识点介绍

本章内容

    技术选型概述

    知识点介绍

    产出：koa2开发环境

### 2.1 技术选型概述

#### 框架选型

koa2 VS express VS egg

异步编程：排除express

学习范围：egg太顶层，不利于理解


#### 数据库选型

mysql VS mongodb

mysql应用广泛，成本低

#### 登录技术

session VS jwt

#### 前端页面

ejs后端模板引擎  VS vue/react前端框架

前端框架复杂程度高，本课程核心关注后端

#### 缓存数据库

redis

#### 单元测试

jest



### 2.2 KOA2

#### 2.2.1 项目创建

（1）koa-generator

包地址：<https://www.npmjs.com/package/koa-generator>

（2）快速创建 
```
# 1. 全局安装：
cnpm i -g koa-generato

# 2. 创建项目
koa2 -e koa2-weibo-code

# 3. 启动项目
cd koa2-weibo-code
cnpm install

# 4. 启动项目
npm run dev

# 5. 访问网址

http://localhost:3000/

```

（3）启动报错

问题：通过npm run dev报错

解决办法：<https://www.jianshu.com/p/815f3f8c635a>

package.json

```js
  "scripts": {
    ...
    "dev": ".\\node_modules\\.bin\\nodemon bin\\www"
  }
```

（4）修改端口

/bin/www
```js
var port = normalizePort(process.env.PORT || '3000');
```

（5）添加gitignore，远程到git仓库

（6）设置环境变量

插件安装
```
cnpm i cross-env -D
```

修改package.json
```js
  "scripts": {
    "start": "node bin/www",
    "dev": "cross-env NODE_ENV=dev .\\node_modules\\.bin\\nodemon bin\\www",
    "prd": "cross-env NODE_ENV=production pm2 start bin/www",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
#### 2.2.2 代码结构

目录结构
```
.
+-- bin
|   +-- www               // 项目启动必备文件,配置端口等服务信息
+-- node_modules          // 项目依赖，安装的所有模块都会在这个文件夹下
+-- public                // 存放静态文件，如样式、图片等
|   +-- images            // 图片
|   +-- javascript        // js文件
|   +-- stylesheets       // 样式文件
+-- routers               // 存放路由文件，如果前后端分离的话只用来书写api接口使用
|   +-- index.js
|   +-- user.js
+-- views                 // 存放存放模板文件，就是前端页面，如果后台只是提供api的话，这个就是备用
|   +-- error.pug
|   +-- index.pug
|   +-- layout.pug
+-- app.js                // 主入口文件
+-- package.json          // 存储项目名、描述、作者、依赖等等信息
+-- package-lock.json     // 存储项目依赖的版本信息，确保项目内的每个人安装的版本一致
```



#### 2.2.3 开发路由


### 2.3 EJS


