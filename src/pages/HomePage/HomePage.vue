<template>
  <div class="home-page">
    <div class="image-container"></div>
    <h1 class="title">Что такое Тайный Санта?</h1>
    <p class="text">
      Тайный санта - это увлекательная игра для семьи, друзей, коллег, да и просто
      компании, ожидающей праздника!
    </p>
  </div>
</template>
<script setup>
defineOptions({
  name: 'HomePage'
})
</script>
<style>
.image-container {
  background-image: url('src/assets/kartinka.jpg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 200px;
}
.title {
  font-size: 54px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: -0.025em;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 0;
  margin-top: 43px;
  text-align: center;
}
.text {
  font-size: 30px;
  font-weight: 400;
  line-height: 42px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 0;
}
</style>
