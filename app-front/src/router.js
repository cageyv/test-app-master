import Vue from 'vue'
import Router from 'vue-router'
import AppData from './views/AppData.vue'
import TableView from './views/TableView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/appData',
      name: 'appData',
      component: AppData
    },
    {
      path: '/data',
      name: 'data',
      component: TableView
    },
    {
      path: '/logs',
      name: 'logs',
      component: TableView
    },
    {
      path: '*',
      redirect: process.env.VUE_APP_DEFAULT_ROUTE
    }
  ]
})
