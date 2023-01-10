import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video/Video.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/Search.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/My.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
