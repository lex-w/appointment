var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js')
var markersData = [];
Page({
  data: {
    tips: {}
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  onLoad: function () {
    
  },
  bindInput: function (e) {
    var that = this;
    var keywords = e.detail.value;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: key });
    myAmapFun.getInputtips({
      keywords: keywords,
      location: '',
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips
          });
        }

      }
    })
  },
  bindSearch: function (e) {
    var keywords = e.currentTarget.dataset.keywords;
    var url = '../addToMeet/add?keywords=' + keywords;
    console.log(url)
    wx.navigateTo({
      url: url
    })
  }
})