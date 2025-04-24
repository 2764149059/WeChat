const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./models/order');  // 引入订单模型

const app = express();
const port = 3000;

// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/wechat_order', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 使用 body-parser 中间件来解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 提交订单的 POST 请求
app.post('/order', async (req, res) => {
  const { customerName, customerAddress, cartItems } = req.body;

  if (!customerName || !customerAddress || !cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: '缺少必要的订单信息' });
  }

  try {
    const newOrder = new Order({
      customerName,
      customerAddress,
      cartItems,
      status: '待处理',  // 初始订单状态
      createdAt: new Date(),
    });

    await newOrder.save();
    res.status(200).json({ message: '订单提交成功', orderId: newOrder._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '订单提交失败，请稍后再试' });
  }
});

// 获取所有订单的 GET 请求
app.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '获取订单失败' });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
