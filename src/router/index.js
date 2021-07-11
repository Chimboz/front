import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Chapatiz Retro₁₀' }
  },
  {
    path: '/tchat',
    name: 'Tchat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tchat.vue'),
    meta: { title: 'Chapatiz Retro₂₃ | Tchat' }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue'),
    meta: { title: 'Chapatiz Retro₄₅ | Mon compte' }
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('../views/Games.vue'),
    meta: { title: 'Chapatiz Retro₆₇ | Jeux' }
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import('../views/Members.vue'),
    meta: { title: 'Chapatiz Retro₈₉ | Membres' }
  },
  {
    path: '/bbs',
    name: 'BBS',
    component: () => import('../views/BBS.vue'),
    meta: { title: 'Chapatiz Retro | BBS' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
