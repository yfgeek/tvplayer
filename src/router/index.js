import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Player from '../components/Player'

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

  ]
})
