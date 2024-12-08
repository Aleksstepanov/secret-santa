import { computed } from 'vue'
import { refreshToken } from './state'

export const isAuthenticated = computed(() => !!refreshToken.value)

export const getRefreshToken = computed(() => refreshToken.value)
