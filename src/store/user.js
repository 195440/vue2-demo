import Vue from 'vue'

export const SET_USER = 'SET_USER' //存入数据
export const DEL_USER = 'DEL_USER' //删除数据

export default {
  state: { id: '', name: '', routepath: '/' },
  mutations: {
    [SET_USER](state, store) {
      console.log('原数据: ' + JSON.stringify(state))
      console.log('合并数据: ' + JSON.stringify(store))
      Object.assign(state, store)
    },
    [DEL_USER](state) {
      console.log('删除数据: ' + JSON.stringify(state))
      Object.keys(state).forEach(k => Vue.delete(state, k))
    },
  },
  actions: {
    [SET_USER]({ commit }, store) {
      commit(SET_USER, store)
    },
    [DEL_USER]({ commit }) {
      commit(DEL_USER)
    },
  }
}