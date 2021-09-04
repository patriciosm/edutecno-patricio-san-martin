import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import Busquedas from './components/Busquedas.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Inicio,
            name: 'inicio'
        },
        {
            path: '/busquedas',
            component: Busquedas,
            name: 'busquedas'
        }
    ]
});