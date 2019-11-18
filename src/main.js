import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios,axios)
axios.defaults.baseURL ='http://192.168.9.166:8082';

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
