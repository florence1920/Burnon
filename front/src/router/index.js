import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainview from '@/views/Mainview.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainview',
    component: Mainview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
