const mongoose = require('mongoose');

// 订单项模型
const orderItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

// 订单模型
const orderSchema = new mongoose.Schema({
  customerName: String,
  customerAddress: String,
  cartItems: [orderItemSchema],
  status: String,  // 订单状态
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
