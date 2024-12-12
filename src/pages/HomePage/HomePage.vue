<template>
  <div class="home-page">
    <div class="image-container"></div>
    <h1 class="title">Что такое Тайный Санта?</h1>
    <p class="text">
      Тайный санта - это увлекательная игра для семьи, друзей, коллег, да и просто
      компании, ожидающей праздника!
    </p>
    <div class="buttons">
      <UiBtn class="main_btn" label="Присоединяйся!" @click="onClick" />
    </div>
    <h2 class="title">Как это работает?</h2>
    <p class="text">
      Игра проходит в несколько этапов. Первый из них - написать своего пожелания. Второй
      - поделиться ссылкой на комнату с друзьями, с которыми ты хочешь играть. Третий -
      узнать, что хочет твой партнер и отправить подарок.
    </p>
    <div class="im">
      <img class="img" :src="kart1" />
      <img class="img" :src="kart2" />
      <img class="img" :src="kart3" />
    </div>
  </div>
</template>
<script setup>
import { UiBtn } from 'src/components/UiBtn'
import { useRouter } from 'vue-router'
import kart1 from 'src/assets/kart1.svg'
import kart2 from 'src/assets/kart2.svg'
import kart3 from 'src/assets/kart3.svg'
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
  font-weight: 600;
  line-height: 60px;
  letter-spacing: -0.025em;
  margin-right: 15%;
  margin-left: 15%;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 0;
  margin-top: 43px;
  text-align: center;
  font-family: 'Dela Gothic One', sans-serif;
  font-weight: 400;
  font-style: normal;
  cursor: default;
}
.text {
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin: 0;
  margin-right: 15%;
  margin-left: 15%;
  font-family: 'Inter', Helvetica;
  font-weight: 400;
  cursor: default;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
}
.buttons button {
  border-radius: 50px;
}
.main_btn span {
  font-size: 50px;
  font-family: 'Dela Gothic One', sans-serif;
  font-weight: 400;
}

.main_btn {
  height: 162px;
  width: 731px !important;
}

.img {
  background-size: cover;
  background-repeat: no-repeat;
  width: 30%;
  height: auto;
  background-position: center;
}
.im {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: auto;
}
</style>
