import Vue from 'vue';
import Vuex from 'vuex';

import data from './modules/data';

import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions,
  modules: {
    data,
  },
});

export { store as default };
