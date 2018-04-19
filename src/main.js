// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from '@/router'

//External Component
import VModal from 'vue-js-modal'

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(VModal, { dialog: true })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
