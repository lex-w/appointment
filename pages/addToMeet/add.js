const days = []
const hours = []
const minutes = ["00", "15", "30", "45"]
const weekList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
for (let i = 0; i < 7; i++) {
  var date = new Date()
  date.setDate(date.getDate() + i)
  var day = date.getDate()
  var items = date.getMonth() + 1 + '月' + (day > 9 ? day : '0' + day) + '日 ' + weekList[date.getDay()]
  days.push(items)
}

for (let i = 1; i <= 23; i++) {
  if(i > 9) {
    hours.push(i)
  } else {
    hours.push('0' + i)
  }
}
function checkHourOrMinute(hour, minute) {
  var h, m
  if(minute > 0 && minute < 15) {
    m = 1
    h = hour
  } else if(minute > 15 && minute < 30) {
    m = 2
    h = hour
  } else if(minute > 30 && minute < 45) {
    m = 3
    h = hour
  } else if(minute > 45) {
    m = 0
    if( hour == 23) {
      h = 0
    } else {
      h = hour
    }
  }
  return {
    hour: h,
    minute: m
  }
}

// 当前显示的时间
const nowDate = new Date()
const tempDate = nowDate.getDate()
// 当前日期
const nowDay = nowDate.getMonth() + 1 + '月' + (tempDate > 9 ? tempDate : '0' + tempDate) + '日 ' + weekList[nowDate.getDay()]
const hm = checkHourOrMinute(nowDate.getHours(), nowDate.getMinutes())
const value = [0, hm.hour, hm.minute]

Page({
  data: {
    index: 0,
    days: days,
    day: nowDay,
    hours: hours,
    hour: hm.hour,
    minutes: minutes,
    minute: minutes[hm.minute],
    value: value,
    timeIsShow: false
  },
  // 修改时间
  changeTime: function (e) {
    if(this.data.timeIsShow) {
      this.setData({
        timeIsShow: false
      })
    } else {
      this.setData({
        timeIsShow: true
      })
    }
  },
  // 时间切换时间
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      day: this.data.days[val[0]],
      hour: this.data.hours[val[1]],
      minute: this.data.minutes[val[2]]
    })
  },
  bindMap: function() {
    wx.navigateTo({
      url: '../map/map'
    })
  }
  
})