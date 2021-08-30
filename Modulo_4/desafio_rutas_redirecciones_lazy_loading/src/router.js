import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const SobreMi = () => import('./components/SobreMi')
const Contacto = () => import('./components/Contacto')
const Post = () => import('./components/Post')
const Articulo = () => import('./components/Articulo')
import Administrador from './components/Administrador.vue'
import NotFound from './components/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi,
            alias: '/acerca'
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto,
            alias: '/contactame'
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '/administrador/:tipo',
            component: Administrador,
            name: 'administrador',
            props: true
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '/portada',
            redirect: '/'
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})