import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const NAME = 'COUNTER_STORE';

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    init(state) {
      const stateJSON: string | null = localStorage.getItem(NAME);
      if (stateJSON) {
        Object.assign(state, JSON.parse(stateJSON));
      }
    },
    increment(state) {
      state.count++;
      localStorage.setItem(NAME, JSON.stringify(state));
    },
    decrement(state) {
      state.count--;
      localStorage.setItem(NAME, JSON.stringify(state));
    },
  },
  actions: {},
  modules: {},
});
