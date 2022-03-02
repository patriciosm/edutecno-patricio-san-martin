import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import SobreMi from './components/SobreMi.vue';
import Contacto from './components/Contacto.vue';
import Post from './components/Post.vue';
import Articulo from './components/Articulo.vue';
import NotFound from './components/NotFound.vue';

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
            path: '/sobremi',
            component: SobreMi,
            name: 'sobremi'
        },
        {
            path: '/contacto',
            component: Contacto,
            name: 'contacto'
        },
        {
            path: '/post/',
            component: Post,
            name: 'post',
            children:[
                {
                    path: ':articulo',
                    component: Articulo,
                    name: 'articulo'
                }
            ]
        },
        {
            path: '*',
            component: NotFound,
            name: 'notfound'
        }
    ]
});