export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  getters: {
    authenticated(state) {
      return state.user !== null;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
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
          body: 334,
          shoe: 612,
          item0: 808,
          item1: 868,
          item2: 938,
        },
        notifications: 0,
      });
    },
    logout({ commit }) {
      commit("setUser", null);
    },
  },
};
