import Vue from 'vue'
import App from './App'
import router from './router'
import AmCharts from '../static/amcharts/amcharts.js'
import AmSerial from '../static/amcharts/serial'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import '../static/amcharts/pie.js'
import '../static/amcharts/gauge.js'
import '../static/amcharts/radar.js'
import '../static/amcharts/serial.js'
import '../static/amcharts/plugins/animate/animate.min.js'
import '../static/amcharts/plugins/export/export.js'
import '../static/amcharts/plugins/export/export.css'
import '../static/amcharts/themes/light.js'
import axios from 'axios'
import store from './store/store.js'

Vue.prototype.$store = store;


Vue.config.productionTip = false
Vue.use(ElementUI);

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://doc.cosmoplat.com:8090'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = ''
}

Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
