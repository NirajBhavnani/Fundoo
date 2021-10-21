import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register/Register.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot Password',
    component: () => import('../views/Forgot/Forgot.vue')
  },
  {
    path: '/reset/:_token',
    name: 'Reset Password',
    component: () => import('../views/Reset/Reset.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue')
  },
  {
    path: '/archives',
    name: 'Archives',
    component: () => import('../views/Archives/Archives.vue')
  },
  {
    path: '/trash',
    name: 'Trash',
    component: () => import('../views/Trash/Trash.vue')
  },
  {
    path: '/vuex',
    name: 'VueX',
    component: () => import('../views/VuexPractice.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
