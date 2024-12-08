<template>
  <div class="login-page">
    <div class="login-page__img"></div>
    <LoginForm class="login-page__form" />
  </div>
</template>
<script setup>
import { LoginForm } from "src/components/LoginForm";
defineOptions({
  name: "LoginPage",
});
</script>
<style scoped>
@import "./styles.css";
</style>
