const state = {
  data: [],
};

const getters = {
  getData: (state) => {
    return state.data;
  },
  getHeaders: state => {
    const headers = [];
    const obj = Object.keys(state.data[0]);
    for (let i = 0; i < obj.length; i += 1) {
      headers.push({ text: obj[i].toString(), value: obj[i].toString(), left: true });
    }
    return headers;
  },
};

const mutations = {
  setData: (state, payload) => {
    state.data = payload;
  },
};

const actions = {
  setData: ({ commit }, payload) => {
    commit('setData', payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
