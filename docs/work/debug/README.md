# 健康监测调试系统

## 项目规划

遇到问题：

设备各异

工具多样

情景复杂

### 需求分析

跨平台

规模小

高集合

### 系统设计

#### NODE

Node.js是一个基于Chrome V8引擎构建的JavaScript运行环境。Node.js使用单线程、事件驱动的模型来处理并发请求，非常适合编写高效、可伸缩的网络应用程序，尤其是服务器端Web应用程序。

Node.js可以用于构建各种类型的应用程序，包括Web应用程序、命令行工具、桌面应用程序等。它支持多种操作系统，包括Windows、macOS和Linux等。

Node.js的核心模块提供了一些基本的功能，例如文件操作、网络通信、加密、压缩等。此外，Node.js还拥有一个庞大的第三方模块生态系统，可以通过npm安装和使用这些模块，使得开发者可以快速构建复杂的应用程序。

#### EXPRESS

Express是一个基于Node.js的Web应用程序框架，它简化了构建Web应用程序的过程。Express提供了一组灵活且强大的功能和工具，可以帮助开发者快速搭建可靠、高效的Web应用。

Express具有以下特点：

轻量级：Express是一个精简而灵活的框架，它不会限制你在项目中使用的其他库或工具。

路由功能：Express提供了路由功能，可以根据URL路径和HTTP方法将请求映射到相应的处理函数。

中间件支持：Express的中间件机制使得开发者可以在请求和响应的处理过程中添加功能模块，例如身份验证、日志记录、错误处理等。

模板引擎：Express支持多种模板引擎，如EJS、Handlebars、Pug等，方便生成动态的HTML页面。

数据库集成：Express可以与各种数据库进行集成，如MongoDB、MySQL等，方便进行数据存取操作。

扩展性：Express允许开发者通过中间件和自定义路由来扩展其功能，以适应各种需求。

总之，Express是一个非常受欢迎的Node.js框架，被广泛用于构建Web应用程序和API。它的简洁性和灵活性使得开发者能够快速构建高性能的Web应用。

### 开发日志

## 后端服务

### HTTP服务

采用express搭建web服务器

项目文件使用 express-generator 生成

```
// 全局安装 express-generator
cnpm i -g express-generator

// 创建项目
express --view=ejs frog

cd frog

cnpm i

```

### 修改启动

全局安装nodemon
```
cnpm install -g nodemon
```

package.json

```js
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"  (新增)
  },
```

启动项目

```
npm run dev
```


### 修改HTTP端口

/bin/www

```js
var port = normalizePort(process.env.PORT || '24112');  // 默认端口3000
app.set('port', port);
```

添加提示信息：onListening()

```js
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);

  // 打印http服务器信息
  var addr = server.address();
  console.log("HTTP服务器启动：", addr)
}
```

```
HTTP服务器启动： { address: '::', family: 'IPv6', port: 64485 }
```

### 修改路由

/routes/index.js
```js
var path = require('path');

router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.sendFile('default/index.html', { root: path.join(__dirname, '../views') });
});
```

访问: <http://localhost:64485/>

### 修改首页

/views/default/index.html

#### bootstrap
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>健康监测调试系统</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
    <link href="/stylesheets/bootstrap.min.css" rel="stylesheet">
    <script src="/javascripts/jquery.min.js"></script>
    <script src="/javascripts/bootstrap.min.js"></script>
</head>

<body>
    <h1>首页</h1>

    <script src="/javascripts/index.js"></script>
</body>

</html>
```

### TCP服务

### UDP服务

## 设备调试

## 辅助工具

