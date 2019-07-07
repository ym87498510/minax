Page({
  data: {
    info: '我是首页'
  },
  mapState: 'userInfo',
  onLoad: function() {
    // this.$store.register('userInfo', this)
    setTimeout(() => {
      this.$store.commit('userInfo', '我在index被第一次修改')
    }, 2000)
    setTimeout(() => {
      this.$store.commit('userInfo', '我早index被第二次修改')
    }, 6000)
  },
  goNext () {
    wx.navigateTo({url: '/pages/next/next'})
  },
  onUnload () {
    console.log('首页面卸载', this)
  }
})
