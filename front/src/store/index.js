import Vue from 'vue'
import Vuex from 'vuex'
import { getUser } from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCommute : '',
    globalId : 'test1'
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
      let userCommute = response.data.User[0].com.isCommute;
      context.commit('SET_USER',userCommute);
    }
  },
  modules: {
  }
})
