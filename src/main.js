import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
