# Ubuntu部署

## 环境搭建

### 1 ubuntu

镜像源：<https://blog.csdn.net/lx7820336/article/details/124703404>

### 2 jdk1.8
教程：<https://developer.aliyun.com/article/704959>

#### 压缩包安装

华为云镜像源：<https://repo.huaweicloud.com/java/jdk/>

(1) 下载：jdk-8u171-linux-x64.tar.gz

(2) 解压：
```sh
tar -zxvf jdk-8u171-linux-x64.tar.gz
```

(3) 移动
```sh
sudo mv jdk1.8.0_171 /usr/local/jdk1.8
```

(4) 配置环境变量

这里我们修改全局配置文件，作用于所有用户：vim /etc/profile  在最后一行添加：

```sh
export JAVA_HOME=/usr/local/jdk1.8
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=.:${JAVA_HOME}/bin:$PATH
```
![Alt text](./img/jdk1.8.png)

(5) 使配置生效
```sh
source /etc/profile
```

(6) 检查是否安装成功：java -version

![Alt text](./img/java_v.png)

### 3 mysql

(1) 安装

```sh
# 安装mysql服务
sudo apt-get install mysql-server
# 安装客户端
sudo apt install mysql-client
# 安装依赖
sudo apt install libmysqlclient-dev
# 检查状态
sudo netstat -tap | grep mysql
```

(2) 查看已有账号
```sh
sudo cat /etc/mysql/debian.cnf
```

![Alt text](./img/mysql.png)

(3) 登录
```sh   
mysql -udebian-sys-maint -pSPQWakeMtVXByF23
```

(4) 查看数据库
```sh
show databases;
```

(5) 使用 ‘mysql’这个库
```sh
use mysql;
update user set authentication_string=PASSWORD("自定义密码") where user='root';
update user set plugin="mysql_native_password";
flush privileges;
quit;
```

(6) 重启
```sh
/etc/init.d/mysql restart
```



## 设置IP



## 反向代理