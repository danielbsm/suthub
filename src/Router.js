import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Paises from './views/Paises.vue';
import Formulario from './views/Formulario.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/paises",
            component: Paises
        },
        {
            path: "/formulario",
            component: Formulario
        }
    ]
})