// miniprogram/pages/next/next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: '我是下一页'
  },
  mapState: ['userInfo'],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.$store.commit('userInfo', '我在next页面被修改')
    }, 2000)
  },
  goIndex () {
    wx.navigateTo({url: '/pages/index/index'})
  },
  onUnload () {
    console.log('下一页面卸载', this)
  }
})
