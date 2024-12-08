import { metaPublic, metaAccount } from './meta-config'
import { redirectIfAuthenticated } from './middleware'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/LoginPage'),
    meta: metaPublic
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('pages/HomePage'),
    meta: metaAccount
    // beforeEnter: redirectIfAuthenticated,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
