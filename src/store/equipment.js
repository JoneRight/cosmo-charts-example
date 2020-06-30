export default {
  namespaced: true,
  state: {
    equipmentBussiness: 0,
    equipmentIndustrial: 0,
    equipmentConsume: 0
  },
  mutations: {
    setBussinessValue (state, val) {
      state.equipmentBussiness = val;
      setVal('equipmentBussiness', val);
    },
    setIndustrialValue (state, val) {
      state.equipmentIndustrial = val;
      setVal('equipmentIndustrial', val);
    },
    setConsumeValue (state, val) {
      state.equipmentConsume = val;
      setVal('equipmentConsume', val);
    },
    setState (state, obj) {
      state.equipmentBussiness = obj.equipmentBussiness;
      state.equipmentIndustrial = obj.equipmentIndustrial;
      state.equipmentConsume = obj.equipmentConsume;
    },
    setVal (state, obj) {
      state[obj.name] = obj.value
    }
  },
  actions: {
    setVal(context) {
      let obj = JSON.parse(sessionStorage.getItem('equipment'))
      context.commit('setState', obj);
    }
  }
}

function setVal(key, val) {
  let data = JSON.parse(sessionStorage.getItem('equipment'));
  if (!data) {
    data = {}
  }
  data = Object.assign({}, data, {
    [key]: val
  });
  data = JSON.stringify(data);
  sessionStorage.setItem('equipment', data);
}
