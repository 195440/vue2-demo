import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export const ROUTE_PATH = 'ROUTE_PATH' //当前路由

export default {
  state: { id: '', name: '', routepath: '/' },
  mutations: {
    [USER_SIGNIN](state, store) {
      sessionStorage.setItem('store', JSON.stringify(store))
      Object.assign(state, store)
    },
    [USER_SIGNOUT](state) {
      sessionStorage.removeItem('store')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
    [ROUTE_PATH](state, store) {
      debugger;
      console.log(state)
      console.log(store)
      Object.assign(state, store)
    },
  },
  actions: {
    [USER_SIGNIN]({ commit }, store) {
      commit(USER_SIGNIN, store)
    },
    [USER_SIGNOUT]({ commit }) {
      commit(USER_SIGNOUT)
    },
    [ROUTE_PATH]({ commit }, store) {
      commit(ROUTE_PATH, store)
    },
  }
}