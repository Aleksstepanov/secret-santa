<template>
  <div class="login-page">
    <div class="login-page__img"></div>
    <LoginForm class="login-page__form" :loading="state.isLoading" @submit="onSubmit" />
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { LoginForm } from 'src/components/LoginForm'
import { useAuthStore } from 'src/stores/auth'
import { emitter } from 'src/plugins'
import { api } from 'src/boot/axios'

defineOptions({
  name: 'LoginPage'
})

const authStore = useAuthStore()
const router = useRouter()

// state
const state = reactive({
  isLoading: false
})
const onSubmit = async payload => {
  const { email, password } = payload
  try {
    state.isLoading = true
    const data = await api.post(
      '/auth/token',
      {
        email,
        password
      },
      {
        mode: 'cors'
      }
    )
    if (data?.status === 200) {
      const { access_token: accessToken, refresh_token: refreshToken } = data?.data || {}
      authStore.authenticate({ accessToken, refreshToken })
    }

    await router.push({ name: 'Home' })
  } catch (error) {
    console.log(error?.message || '')
    emitter.emit('notify', {
      type: 'negative',
      message: `Ошибка авторизации. ${error?.message || ''}`
    })
  } finally {
    state.isLoading = false
  }
}
</script>
<style scoped>
@import './styles.css';
</style>
