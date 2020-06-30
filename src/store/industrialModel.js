export default {
  namespaced: true,
  state: {
    model: 0,
    value: 0
  },
  mutations: {
    setValue (state, val) {
      state.value = val;
    },
    setModel (state, val) {
      state.model = val;
    }
  }
}
