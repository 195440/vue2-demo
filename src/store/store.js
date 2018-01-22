import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
  state: JSON.parse(sessionStorage.getItem('store')) || {},
  mutations: {
    [USER_SIGNIN](state, store) {
      sessionStorage.setItem('store', JSON.stringify(store))
      Object.assign(state, store)
    },
    [USER_SIGNOUT](state) {
      sessionStorage.removeItem('store')
      Object.keys(state).forEach(k => Vue.delete(state, k))
    }
  },
  actions: {
    [USER_SIGNIN]({ commit }, store) {
      commit(USER_SIGNIN, store)
    },
    [USER_SIGNOUT]({ commit }) {
      commit(USER_SIGNOUT)
    }
  }
}