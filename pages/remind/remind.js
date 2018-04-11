Page({
  data: {
    items: [
      { value: '5', name: '5分钟之前' },
      { value: '15', name: '15分钟之前'},
      { value: '30', name: '30分钟之前' },
      { value: '1', name: '1小时之前' },
      { value: '2', name: '2小时之前' }
    ],
    nowtime: false, // 是否已接近当前时间
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    var items = this.data.items;
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }

    this.setData({
      items: items
    });
  }
})
