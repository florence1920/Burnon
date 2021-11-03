import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainview from '@/views/Mainview.vue'
import BurnonCafeView from '@/views/company/food/cafe/BurnonCafeView.vue'
import MyRoom from '@/views/MyRoom.vue';
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
    path: '/burnoncafe',
    name: 'BurnonCafeView',
    component: BurnonCafeView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
