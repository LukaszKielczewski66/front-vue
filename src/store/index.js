import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false
  },
  getters: {
    isDarkTheme(state) {
      return state.darkTheme;
    }
  },
  mutations: {
    setDarkTheme(state, val) {
      state.darkTheme = val;
      localStorage.setItem("isDarkTheme", val);
    }
  },
  actions: {
    initTheme(context) {
      let isDarkTheme = localStorage.getItem('isDarkTheme') == "true" ? true: false; 
      context.commit('setDarkTheme', isDarkTheme);
    }
  },
  modules: {
  }
})
