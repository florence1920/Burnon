import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCommute : ''
  },
  mutations: {
    SET_USER(state, isCommute){
      state.isCommute = isCommute;
    }
  },
  actions: {
    async GET_USER(context, userId){
      const response = await getUser(userId);
      console.log(userId);
      console.log(response);
      context.commit('SET_USER',userId);
    }
  },
  modules: {
  }
})
