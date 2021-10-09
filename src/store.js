import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    adminToken: null,
    adminConnected: false
  },
  mutations: {
    adminToken: (state, token) => {
      state.adminToken = token;
    },
    adminConnected: (state, isConnected) => {
      state.adminConnected = isConnected;
    }
  },
  actions: {
  },
  modules: {
  }
})
