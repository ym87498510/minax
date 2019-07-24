import Store from '../dist/index.js'

export default new Store({
  // easy模式会自动补齐mutation，绑定缓存模式的state参数会少许不一样
  easyMode: true,
  bindStorageMode: true,
  state: {
    userInfo: {
      persistence: true,
      default: '我是一开始的值'
    }
  },
  // mutation: {
  //   userInfo(state, payload) {
  //     state['userInfo'] = payload
  //   }
  // },
  action: {}
})
