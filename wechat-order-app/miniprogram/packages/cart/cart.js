Page({
  data: {
    cartItems: []
  },

  onLoad: function () {
    const cartItems = [
      { id: 1, name: '毛血旺', quantity: 2 },
      { id: 2, name: '鸡公煲', quantity: 1 }
    ];
    this.setData({ cartItems });
  },

  removeItem: function (event) {
    const id = event.currentTarget.dataset.id;
    const updatedItems = this.data.cartItems.filter(item => item.id !== id);
    this.setData({ cartItems: updatedItems });
  },

  submitOrder: function () {
    wx.showToast({
      title: '订单提交成功',
      icon: 'success',
    });
  }
});
