import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Paises from './views/Paises.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/paises",
            component: Paises
        }
    ]
})