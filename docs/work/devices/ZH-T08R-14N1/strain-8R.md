# 8 通道电阻测量模块

## 产品介绍

![alt text](./img/ZH-T08R-14N1.png)

型号：ZH-T08R-14N1

中创智合官网：<https://www.szzczh.cn/>

说明书下载地址：<https://www.szzczh.cn/d.aspx?type=1&tid=9&tn=%E6%B8%A9%E5%BA%A6%E4%B8%8E%E7%94%B5%E9%98%BB%E9%87%87%E9%9B%86%E6%A8%A1%E5%9D%97>

## 软件设计

### MODBUS

#### 步骤

1. usr-vcom 开启虚拟串口程序

![alt text](./img/user-vcom.png)

2. 安装 modbus-serial

```
npm install modbus-serial
```

3. node 启动程序

```
node index.js
```

4. 读取参数

```js
return client.readHoldingRegisters(0x0050, 1);
```

5. 写入参数

```js
return client.writeRegister(0x0050, 44); // 写入数据
```

6. 确认写入

```js
client.setID(44);

return client.readHoldingRegisters(0x0050, 1);
```

#### 程序代码

```js
const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

// 打开串口连接
client
  .connectRTUBuffered("COM2", { baudRate: 9600 })
  .then(async () => {
    // client.setID(44);

    console.log("Serial port connected.");
    return client.readHoldingRegisters(0x0050, 1);
  })
  .then((data) => {
    console.log("Read data:", data.data);
    // return client.writeRegister(0x0050, 44); // 写入数据
  })
  .then(() => {
    console.log("Write operation successful.");
    client.close();
  })
  .catch((err) => {
    console.error("Error:", err);
    client.close();
  });
```

## 工作记录

2024-02-26：modbus 测试

2024-02-27：编写 modbus 测试程序

2024-03-25：组装采集箱
