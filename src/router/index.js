import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import PlayerPage from '../pages/PlayerPage'

import NotFoundPage from '../pages/NotFoundPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/live/:channel',
      name: 'PlayerPage',
      component: PlayerPage
    },
    {
      path: '/404',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
    {
      path: '*',
      component: NotFoundPage,
      meta: {
        title: '404未找到',
      },
    },

  ]
})
