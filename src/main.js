import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import store from './store/store';
import { routes } from './routes';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueResource);


Vue.http.options.root = 'https://vuejs-lava.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
