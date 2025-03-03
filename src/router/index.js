import { createRouter, createWebHistory } from 'vue-router'
import SingUpView from '../views/SingUpView.vue'
import AddPostView from '@/views/AddPostView.vue'
import SingInView from '@/views/SingInView.vue'
import HomeView from '@/views/HomeView.vue'
import Ems from '@/components/ems.vue'

const routes = [
  {
    path: '/',
    name: 'singUp',
    component: SingUpView
  }
  ,
  {
    path: '/Home',
    name: 'home',
    component:HomeView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component:AddPostView
  },
  {
    path: '/login',
    name: 'singIn',
    component: SingInView
  },
  {
    path: '/ems',
    name: 'ems',
    component:Ems
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
