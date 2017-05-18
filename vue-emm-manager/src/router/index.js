import Vue from 'vue'
import Router from 'vue-router'
import Push from '../pages/Push.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Push',
      component: Push
    }
  ]
})
