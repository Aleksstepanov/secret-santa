import { metaPublic, metaAccount } from './meta-config'
import { redirectIfAuthenticated } from './middleware'

const routes = [
  {
    path: '/',
    redirect: '/rooms'
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
    meta: metaPublic
    // beforeEnter: redirectIfAuthenticated,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import('pages/RoomsPage'),
    meta: metaAccount
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
