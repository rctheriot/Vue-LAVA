import Vue from 'vue';
import Vuex from 'vuex';

import cereal from './modules/cereal';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cereal,
  },
});

export { store as default };