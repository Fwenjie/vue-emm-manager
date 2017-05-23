// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import 'iview/dist/styles/iview.css'    // 使用 iview CSS
import Iview from 'iview'
import './assets/styles/estore.css'
import Fun from './assets/scripts/fun'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Iview)
Vue.use(Fun)

Vue.http.options.emulateJson = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
