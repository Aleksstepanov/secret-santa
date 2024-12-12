import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useAuthStore } from 'src/stores/auth/authStore'

// Создаём экземпляр Axios
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(
  async config => {
    try {
      const publicEndpoints = [
        'auth/local',
        'auth/local/register',
        'auth/forgot-password',
        'auth/reset-password'
      ]

      if (publicEndpoints.includes(config.url || '')) {
        return config
      }

      const accessToken = localStorage.getItem('accessToken')
      config.headers.Authorization = `Bearer ${accessToken}`
      config.headers['Content-Type'] = config.url?.includes('upload')
        ? 'multipart/form-data'
        : 'application/json'

      return config
    } catch (error) {
      console.error('Request interceptor error:', error)
      return Promise.reject(error)
    }
  },
  error => Promise.reject(error)
)

api.interceptors.response.use(
  response => {
    return response
  },
  async err => {
    const originalConfig = err.config
    if (err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        const authStore = useAuthStore()
        try {
          const refreshToken = authStore.getRefreshToken()
          const res = await axios.post(`${process.env.VITE_STRAPI_REST}/token/refresh`, {
            refreshToken
          })

          authStore.authenticate({
            accessToken: res.data.jwt,
            refreshToken: res.data.refreshToken
          })

          api.defaults.headers.Authorization = `Bearer ${res.data.jwt}`
          api.defaults.headers['Content-Type'] = originalConfig.url.includes('upload')
            ? 'multipart/form-data'
            : 'application/json'

          return api(originalConfig)
        } catch (refreshError) {
          const authStore = useAuthStore()
          authStore.logout()
          return Promise.reject(refreshError)
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data)
      }
    }

    return Promise.reject(err)
  }
)

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
