import { defineStore } from 'pinia';
import { accessToken, refreshToken } from './state';
import { isAuthenticated } from './getters';
import { authenticate, logout } from './actions';

export const useAuthStore = defineStore('auth', () => {
  return {
    accessToken,
    refreshToken,
    isAuthenticated,
    authenticate,
    logout
  };
});
