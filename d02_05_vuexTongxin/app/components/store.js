import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 20
  },
  mutations: {
    add (state) {
      state.count++
    },
    minus (state) {
      state.count-- 
    }
  }
})

export default store;