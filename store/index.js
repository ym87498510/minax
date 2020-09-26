import Store from '../dist/index.js'

export default new Store({
  // 绑定缓存模式时，state入参不太一样
  bindStorageMode: true,
  state: {
    cartCount: {
      persistence: true,
      default: 0
    },
    mark: {
      persistence: true,
      default: ''
    }
  },
  // state: {
  //   cartCount: 0,
  //   mark: ''
  // },
  action: {
    setmark({commit}, payload) {
      setTimeout(() => {
        commit('mark', payload)
      }, 2000) 
    }
  }
})
