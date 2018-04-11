var amapFile = require('../../libs/amap-wx.js');
var config = require('../../libs/config.js')
var markersData = [];
Page({
  data: {
    tips: {},
    searchStr: ''
  },
  onShow: function(e) {
    var address = this.options.address
    if(address) {
      this.setData({
        searchStr: address
      })
      this.searchPublic(address)
    }
  },
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    that.showMarkerInfo(markersData, id);
    that.changeMarkerColor(markersData, id);
  },
  bindInput: function (e) {
    var keywords = e.detail.value;
    this.searchPublic(keywords)
  },
  searchPublic: function(keywords) {
    var that = this;
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
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    prevPage.setData({
      keywords: keywords
    })
    wx.navigateBack({
      data: 1
    })
  }
})