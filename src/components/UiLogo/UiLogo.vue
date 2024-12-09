<template>
  <div class="logo">
    <img :src="logoSrc" alt="Logo" class="logo__svg" />
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
