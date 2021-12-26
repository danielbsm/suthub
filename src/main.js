import Vue from 'vue'
import App from './App.vue'
import router from './Router.js';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Loading)

Vue.component('loading', Loading);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
