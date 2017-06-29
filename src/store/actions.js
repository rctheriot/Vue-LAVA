import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('cereal.json')
    .then(response => response.json())
    .then((data) => {
      if (data) {
        commit('setData', data);
      }
    });
};
