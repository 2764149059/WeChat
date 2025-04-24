Page({
  data: {
    name: '',
    address: ''
  },

  onInputName: function (e) {
    this.setData({ name: e.detail.value });
  },

  onInputAddress: function (e) {
    this.setData({ address: e.detail.value });
  },

  confirmOrder: function () {
    wx.showToast({
      title: '订单已提交',
      icon: 'success',
    });
  }
});
