import store from './store/index.js'
console.log(store)
// 为App方法安装
App = store.install(App)
// 为page安装
Page = store.install(Page)
// 为组件安装
Component = store.install(Component, 'methods')

App({
  onLaunch: function () {
    this.$store.commit('userInfo', '我在app.js被设置了')
  }
})
