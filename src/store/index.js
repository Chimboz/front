import { createStore } from "vuex";

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
});

export default store