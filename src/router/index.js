import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../components/Welcome'
import login from '../components/auth/Login'
import signup from '../components/auth/Signup'
import HomePage from '../components/home/HomePage'
import { auth } from '../firebase/init-firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
