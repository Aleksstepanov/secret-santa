<template>
  <div class="login-form__content">
    <h3 class="login-form__title">Добро пожаловать</h3>
    <q-form class="login-form__form">
      <UiField direction="column">
        <p class="login-form__label">
          Ваше Имя
        </p>
      <UiInput :model-value="fields.fullName" label="Ваше имя" />
      </UiField>
      <UiField direction="column">
        <p class="login-form__label">
          Почта
        </p>
        <UiInput :model-value="fields.fullName" label="Почта" />
      </UiField>
      <UiField direction="column">
        <p class="login-form__label">
          Пароль
        </p>
        <UiInput :model-value="fields.fullName" label="Пароль" />
      </UiField>
      <UiField direction="column">
        <UiBtn />
      </UiField>
    </q-form>
  </div>
</template>
<script setup>
import {reactive} from 'vue'
import {UiInput} from 'src/components/UiInput'
import {UiField} from 'src/components/UiField'
import {UiBtn} from 'src/components/UiBtn'

const fields = reactive({
  fullName: '',
  email: '',
  password: '',
})
</script>
<style scoped>
@import "./styles.css";
</style>
