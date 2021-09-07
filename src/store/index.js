import { createStore } from "vuex";
import auth from './modules/auth.js';

const store = createStore({
  state: {
    progress: 10,
  },
  mutations: {
    start(state) {
      state.progress = 10;
    },
    increment(state) {
      state.progress++;
    },
    done(state) {
      state.progress = 100;
    },
  },
  modules: {
    auth
  }
});

export default store