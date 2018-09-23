import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage'
import PlayerPage from '../pages/PlayerPage'
import SettingsPage from '../pages/SettingsPage'
import NotFoundPage from '../pages/NotFoundPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {keepAlive: true}
    },
    {
      path: '/settings',
      name: 'SettingsPage',
      component: SettingsPage,
      meta: {keepAlive: true}
    },
    {
      path: '/live/:channel',
      name: 'PlayerPage',
      component: PlayerPage,
      meta: {keepAlive: false}
    },
    {
      path: '/404',
      name: 'NotFoundPage',
      component: NotFoundPage,
      meta: {keepAlive: true}
    },
    {
      path: '*',
      component: NotFoundPage,
      meta: {
        title: '404未找到',
        keepAlive: true,
      },
    },

  ]
})
