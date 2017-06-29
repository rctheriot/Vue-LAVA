import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
<<<<<<< HEAD
import { routes } from './routes';
=======

import App from './App.vue';
>>>>>>> origin/unity-table
import store from './store/store';
import { routes } from './routes';

Vue.use(Vuetify);
Vue.use(VueRouter);

//Vue.http.options.root = '';

<<<<<<< HEAD
Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history',
=======
const router = new VueRouter({
  mode: 'history',
  routes,
>>>>>>> origin/unity-table
});

new Vue({
  el: '#app',
  router,
  store,
  router,
  render: h => h(App)
})
