# web服务

## 用户相关

### 用户注册

    本节内容：
        架构设计
        接口设计
        数据建模
        是否存在
        注册接口
        密码加密
        格式校验


#### 架构设计

routes

    /view

    /api

controller 

    业务逻辑

    返回格式 ./model

service 

    数据处理

    格式化

db 

    定义模型

    封装操作

#### 接口设计

接口：/api/user/register

方法：Post  参数：userName，password

接口：/api/user/isExist

方法：Post  参数：userName

#### 数据建模

表名：users

    userName    用户名  INT(11)
    password    密码    VARCHAR(255)
    gender      性别    DECIMAL(10,0)
    nickName    昵称    VARCHAR(255)
    picture     头像    VARCHAR(255)
    city        城市    VARCHAR(255)  

#### 用户是否存在

routes：/api/user/isExist

方法：Post  参数：userName

controller：

    1 业务逻辑（无）—— 直接返回数据

    fn：isExist(userName) <—— getUserInfo

    2 返回格式 —— /src/model/ResModel

service：获取数据

    fn：getUserInfo(userName，password){

        // 1 查询条件

        // 2 查询数据（查到/未查到）

        // 3 格式化处理：fn: formatUser
        （格式化头像：fn: _formatUserPicture）

        // 4 返回数据
    }

#### 注册接口

routes：/api/user/register

方法：Post  参数：userName，password

controller：

    1 业务逻辑：fn：register —— 先查询，后注册


service：注册用户

    fn：createUser

#### 密码加密

crypto 加密（md5）：/src/utils/cryp



#### 格式校验

routes 层


1 校验规则：json schema

文件：/src/validator/User


2 执行校验：ajv

文件：/src/validator/validate


### 用户登录

前后端接口：/api/user/login

方法：Post

#### 登录成功返回

跳转到指定 url 或 首页

例子：http://localhost:3000/login?url=xxx
```js
var redirectUrl = $.query.get('url') || '/'
location.href = redirectUrl
```

### 用户设置

### 个人主页

### 粉丝关注