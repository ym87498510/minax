import Store from '../dist/index.js'

export default new Store({
  // TODO 后续增加easy模式和绑定缓存模式，easy模式会自动补齐mutation，绑定缓存模式的state参数会少许不一样
  easyMode: true,
  bindStorageMode: true,
  state: {
    userInfo: '我是一开始的值'
  },
  mutation: {
    userInfo(state, payload) {
      state['userInfo'] = payload
    }
  },
  action: {}
})
