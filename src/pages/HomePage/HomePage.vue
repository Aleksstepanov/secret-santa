<template>
  <div class="home-page">
    <div class="image-container"></div>
    <h1 class="title">Что такое Тайный Санта?</h1>
    <p class="text">
      Тайный санта - это увлекательная игра для семьи, друзей, коллег, да и просто
      компании, ожидающей праздника!
    </p>
    <div class="buttons">
      <UiBtn label="Присоединяйся!" @click="onClick" />
    </div>
  </div>
</template>
<script setup>
import { UiBtn } from 'src/components/UiBtn'
import { useRouter } from 'vue-router'
defineOptions({
  name: 'HomePage'
})

const router = useRouter()
const onClick = () => {
  router.push({ name: 'login' })
}
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
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
}
</style>
