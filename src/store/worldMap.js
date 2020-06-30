export default {
  namespaced: true,
  state: {
    user: 0,
    rd: 0,
    company: 0
  },
  mutations: {
    setUser (state, val) {
      state.user = val;
    },
    setRd (state, val) {
      state.rd = val;
    },
    setCompany (state, val) {
      state.company = val;
    }
  }
}
