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
  {
    path: '/error-page/:code',
    name: 'ErrorPage',
    component: () => import('pages/ErrorPage'),
    props: route => ({ code: route.params.code }),
    meta: metaPublic
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorPage'),
    meta: metaPublic,
    props: () => ({ code: '404' }),
  }
]

export default routes
