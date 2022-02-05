import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios				//$[http]:http随便取名
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
