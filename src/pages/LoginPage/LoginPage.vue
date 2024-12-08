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
import { fakeRequest } from 'src/utils'
import { useAuthStore } from 'src/stores/auth'
import { emitter } from 'src/plugins'

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
  console.log('payload', payload)
  try {
    state.isLoading = true
    await fakeRequest(2000)
    authStore.authenticate({ accessToken: 'accessToken', refreshToken: 'refreshToken' })
    await router.push({ name: 'Home' })
  } catch (error) {
    console.log(error)
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
