import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

import industrialApp from './industrialApp'
import industrialModel from './industrialModel'
import equipment from './equipment'
import worldMap from './worldMap'

export default new Vuex.Store({
  modules: {
    industrialApp,
    industrialModel,
    equipment,
    worldMap
  }
})
