const API_BASE = 'http://localhost:3000';

const submitOrder = (orderData) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_BASE}/order`,
      method: 'POST',
      data: orderData,
      success: (res) => resolve(res.data),
      fail: (error) => reject(error),
    });
  });
};

module.exports = { submitOrder };
