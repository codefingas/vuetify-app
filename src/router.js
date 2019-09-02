import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from './views/dashboard.vue'
import Team from './views/team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashBoard',
      component: DashBoard
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/projects.vue')
    },
    {
      path : '/account',
      name : "team",
      component : Team
    }
  ]
})
