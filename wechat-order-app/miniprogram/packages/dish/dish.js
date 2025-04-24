Page({
  data: {
    dish: {}
  },

  onLoad: function (options) {
    const dishId = options.id;
    const dishes = [
      { id: 1, name: '毛血旺', image: '/images/maoxuewang.jpg', price: 88 },
      { id: 2, name: '鸡公煲', image: '/images/jigongbao.jpg', price: 38 }
    ];
    const dish = dishes.find(item => item.id == dishId);
    this.setData({ dish });
  },

  addToCart: function () {
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
    });
  }
});
