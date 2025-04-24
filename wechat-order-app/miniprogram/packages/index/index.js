Page({
  data: {
    dishes: [
      { id: 1, name: '毛血旺', image: '/images/maoxuewang.jpg' },
      { id: 2, name: '鸡公煲', image: '/images/jigongbao.jpg' }
    ]
  },

  viewDish: function (event) {
    const dishId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/dish/dish?id=${dishId}`,
    });
  }
});
