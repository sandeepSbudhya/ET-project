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
    path: '/welcome',
    name: 'welcome',
    component: welcome,
    meta: {
      requiresAuth: false,
      title: 'Welcome'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      requiresAuth: false,
      title: 'Login'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    title: 'Signup'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
    props:true,
    meta: {
      requiresAuth: true,
      title:'home'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ('Your Website Title');
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
