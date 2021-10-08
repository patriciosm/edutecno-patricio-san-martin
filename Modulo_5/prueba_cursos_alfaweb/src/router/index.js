import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getAuth } from "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      autorizado: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('@/views/Registro.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import('@/views/Administracion.vue'),
    meta: {
      autorizado: true
    }
  },
  {
    path: '/edicion',
    name: 'Edicion',
    component: () => import('@/views/Edicion.vue'),
    meta: {
      autorizado: true
    }
  },
  {
    path: '*',
    redirect: '/login'
  },
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
    next('/');
  }
  else {
    next();
  }
})

export default router
