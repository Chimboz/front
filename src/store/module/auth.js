export default {
  namespaced: true,
  state() {
    return {
      user: null
    };
  },
  getters: {
    authenticated(state) {
      return state.user !== null;
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login({ commit }) {
      commit("setUser", {
        name: "Tigriz",
        id: 3,
        signature: "Nitens lux, horrenda procella, tenebris aeternis involuta",
        color: "#900",
        role: 100,
        credits: 1069,
        look: {
          avatar: 0,
          emote: "zzz",
          hat: 7,
          body: 17,
          shoe: 7,
          item0: 17,
          item1: 1,
          item2: 1
        },
        notifications: 5
      });
    },
    logout({ commit }) {
      commit("setUser", null);
    }
  }
};
