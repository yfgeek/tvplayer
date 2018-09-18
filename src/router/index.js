import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Player from '../components/Player'

import NotFound from '../pages/NotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/live/:channel',
      name: 'Player',
      component: Player
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '*',
      component: NotFound,
      meta: {
        title: '404未找到',
      },
    },

  ]
})
