export default {
  namespaced: true,
  state: {
    value: 0
  },
  mutations: {
    setValue (state, val) {
      state.value = val;
    }
  }
}
