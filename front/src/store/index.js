import Vue from 'vue'
import Vuex from 'vuex'
import { getUser, getUserInfo, getJob } from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCommute : '',
    globalId : 'test1',
    globalName : '',
    loginId: '',
    job:{}
  },
  mutations: {
    SET_USER(state, isCommute){
      state.isCommute = isCommute;
    },
    SET_USERNAME(state, username){
      state.globalName = username;
    },
    SET_JOBCAREER(state, job){
      state.job = job;
    }
  },
  actions: {
    async GET_USER(context, userId){
      const response = await getUser(userId);
      console.log(userId);
      let userCommute = response.data.User[0].com.isCommute;
      context.commit('SET_USER',userCommute);
    },
    async GET_USERINFO(context, userId){
      console.log(userId);
      const response = await getUserInfo(userId);
      console.log(response.data.username);
      context.commit('SET_USERNAME',response.data.username);
    },
    async GET_JOB(context, userGoal){
      const response = await getJob(userGoal);
      //console.log();
      context.commit('SET_JOBCAREER',response.data.job);
    }
  },
  modules: {
  }
})
