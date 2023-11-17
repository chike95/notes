# HTTP服务

## 基本使用

HTTP通信协议 -计算机网络
 
原生node实现http服务器逻辑

1.使用node创建http服务，并能接收到客户端发来的请求

2.获取客户端发来的具体数据，根据不同的请求数据进行处理

3.将处理后的数据返回给客户端，并关闭连接

```js
// 1 导入http模块
var http = require('http');

// 2 创建服务器（获取实例对象）
var server = http.createServer();
server.listen(8080, function () {
    console.log('127.0.0.1:8080');
})

// 3 监听请求事件，返回处理结果
server.on('request', function (req, res) {
    console.log('666');
    res.write('222你好');
    res.end();
})
```

#### 响应内容

文本：text/plain;charset=utf-8

```js
res.setHeader('Content-type', 'text/plain;charset=utf-8')
```

超文本：text/html;charset=utf-8

```js
res.setHeader('Content-type', 'text/html;charset=utf-8')
```

响应页面

```js
server.on('request', function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        res.write(data);
        res.end();
    })
})
```

页面包含图片无法响应: index.html

```html
    你好啊
    <img src="./hero.png" alt="">
```

查看标头：

请求网址: http://127.0.0.1:8080/hero.png

解决办法：判断请求对象

查看请求: req.url
```
/
/hero.png
/favicon.ico
```

```js
server.on('request', function (req, res) {
    console.log(req.url);
    if (req.url == '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            res.write(data);
            res.end();
        })
    } else {
        fs.readFile('./hero.png', function (err, data) {
            res.end(data);
        })
    }
})
```

#### 请求方法

GET : 获取服务器资源

POST：提交数据给服务器

PUT：修改服务器资源

DELETE：删除服务器资源

HEAD：获取服务器响应首部

OPTIONS：获取服务器支持的方法

查看请求方法：req.method

## url

#### 获取GET请求参数

http://127.0.0.1:8080/user?id=123

url.parse(req.url) 

```js
  search: '?id=123',
  query: 'id=123',  
  pathname: '/user',
  path: '/user?id=123',
  href: '/user?id=123'
```
url.parse(req.url, true)

```js
  search: '?id=123',
  query: [Object: null prototype] { id: '123' },
  pathname: '/user',
  path: '/user?id=123',
  href: '/user?id=123'
```

获取id：url.parse(req.url, true).query.id

```
123
```

#### 获取POST请求参数


