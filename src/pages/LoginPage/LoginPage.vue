<template>
  <div class="login-page">
    <div class="login-page__img"></div>
    <LoginForm class="login-page__form" @submit="onSubmit" />
  </div>
</template>
<script setup>
import { LoginForm } from 'src/components/LoginForm'

defineOptions({
  name: 'LoginPage'
})

const onSubmit = payload => {
  console.log('payload', payload)
}
</script>
<style scoped>
@import './styles.css';
</style>
