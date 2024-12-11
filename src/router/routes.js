import { metaPublic, metaAccount } from './meta-config'
import { redirectIfAuthenticated } from './middleware'

const routes = [
  {
    path: '/',
    redirect: '/rooms/all'
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
    path: '/rooms/:filter?',
    name: 'Rooms',
    component: () => import('pages/RoomsPage'),
    meta: metaAccount,
    props: true,
    beforeEnter: (to, from, next) => {
      if (!to.params.filter) {
        next({ name: 'Rooms', params: { filter: 'all' } })
      } else {
        next()
      }
    }
  },
  {
    path: '/rooms/:id',
    name: 'Room',
    component: () => import('pages/RoomPage'),
    meta: metaAccount,
    props: route => ({ id: route.params.id })
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
    props: () => ({ code: '404' })
  }
]

export default routes
