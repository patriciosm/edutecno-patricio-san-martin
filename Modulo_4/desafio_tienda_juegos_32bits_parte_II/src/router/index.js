import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/busquedas',
    name: 'busquedas',
    component: () => import ('../views/Busquedas.vue')
  },
  {
    path: '/ventas',
    name: 'ventas',
    component: () => import ('../views/Ventas.vue')
  },
  {
    path: '/total',
    name: 'total',
    component: () => import ('../views/Total.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
