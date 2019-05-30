import Vue from 'vue'
import Router from 'vue-router'

import home from './components/home.vue'
import twitterPageHome from './components/twitterPage/twitterPageHome.vue'
import airbnbPageHome from './components/airbnbPage/airbnbPageHome.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/twitterPageHome',
      name: 'twitterPage',
      component: twitterPageHome
    },
    {
      path: '/airbnbPageHome',
      name: 'airbnbPage',
      component: airbnbPageHome
    },
  ]
})