export default {
  namespaced: true,
  state () {
    return {
      user: null
    }
  },
  getters: {
    authenticated(state) {
      return state.user !== null
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login({ commit }) {
      commit("setUser", { "name": "Tigriz", "id": 3})
    },
    logout ({ commit }) {
      commit("setUser", null)
    }
  }
}