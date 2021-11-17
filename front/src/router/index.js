import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue'
import SignupView from '@/views/user/SignupView.vue';
import LoginView from '@/views/user/LoginView.vue';
import ModifyView from '@/views/user/ModifyView.vue';
import RecoView from '@/views/recommend/RecoView.vue';
import RoomView from '@/views/metaverse/RoomView.vue';
import OfficeView from '@/views/metaverse/OfficeView.vue';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  // user
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
  {
    path: '/user/modify',
    name: 'modify',
    component: ModifyView
  },
  //recommend
  {
    path: '/reco/',
    name: 'Reco',
    component: RecoView
  },
  //metaverse
  {
    path: '/room',
    name: 'Room',
    component: RoomView
  },
  {
    path: '/office',
    name: 'Office',
    component: OfficeView
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
