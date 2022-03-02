import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import { getAuth } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      autorizado: true
    }
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const authRequired = to.matched.some(route => route.meta.autorizado)
  if( !user && authRequired ) {
    next('/login');
  }
  else if( user && !authRequired ){
    next('/home');
  }
  else {
    next();
  }
})

export default router
