import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import App from './App.vue';
import store from './store/store';
import { routes } from './routes';

Vue.use(Vuetify);
Vue.use(VueRouter);

//Vue.http.options.root = '';

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  router,
  render: h => h(App)
})
