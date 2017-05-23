import Vue from 'vue'
import Router from 'vue-router'
import Notice from '../pages/notice/Notice.vue'
import NoticeGroups from '../pages/notice/Groups.vue'
import NoticeCreate from '../pages/notice/Create.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Notice',
      component: Notice,
      children: [

      ]
    },
    {
      path: '/create',
      name: 'NoticeCreate',
      component: NoticeCreate
    },
    {
      path: '/groups',
      name: 'NoticeGroups',
      component: NoticeGroups,
      beforeEnter: (to, from, next) => {
        console.log(from['path'])
      }
    }
  ]
})
