<template>
  <div class="logo">
    <a href="/"><img :src="logoSrc" alt="Logo" class="logo__svg" /></a>
  </div>
</template>
<script setup>
import logoSrc from 'src/assets/logo.svg'

defineOptions({
  name: 'UiLogo'
})
</script>
<style scoped>
@import './styles.css';
</style>
