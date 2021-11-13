import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainview from '@/views/Mainview.vue'
import BurnonCafeView from '@/views/company/food/cafe/BurnonCafeView.vue'
import MyRoom from '@/views/MyRoom.vue';
import MyCompany from '@/views/MyCompany.vue';
import Commute from '@/views/Commute.vue';
import TestView from '@/views/TestView.vue';
import SignupView from '@/views/SignupView.vue';
import LoginView from '@/views/LoginView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainview',
    component: Mainview
  },
  {
    path: '/myroom',
    name: 'MyRoom',
    component: MyRoom
  },
  {
    path: '/mycompany',
    name: 'MyCompany',
    component: MyCompany
  },
  {
    path: '/mycompany/commute/:userId',
    name: 'Commute',
    component: Commute
  },
  {
    path: '/burnoncafe',
    name: 'BurnonCafeView',
    component: BurnonCafeView
  },
  {
    path: '/test/:userId',
    name: 'test',
    component: TestView
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/user/login',
    name: 'login',
    component: LoginView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
