// miniprogram/pages/next/next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  mapState: ['cartCount', 'mark'],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.$store.dispatch('setmark', 'efjdkewnjkfdnk')
  },
  bindKeyInput(e) {
    this.$store.commit('mark', e.detail.value)
  },
  goIndex () {
    wx.navigateTo({url: '/pages/index/index'})
  },
  onUnload () {
    console.log('下一页面卸载', this)
  }
})
