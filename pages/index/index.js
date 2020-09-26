Page({
  data: {
    info: '我是首页'
  },
  mapState: ['cartCount', 'mark'],
  onLoad: function() {
  },
  goNext () {
    wx.navigateTo({url: '/pages/cart/cart'})
  },
  add () {
    let count = this.data.cartCount
    this.$store.commit('cartCount', count + 1)
  },
  sub () {
    let count = this.data.cartCount
    count--
    count < 0 && (count = 0)
    this.$store.commit('cartCount', count)
  },
  onUnload () {
    console.log('首页面卸载', this)
  }
})
