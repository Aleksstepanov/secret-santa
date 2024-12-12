<template>
  <!-- <div class="element">
    <div class="error-page">
      <div class="overlap-group">
        <div class="text-wrapper">{{ getTitleError.message }}</div>
        <div class="text-wrapper-2">{{ getTitleError.subtitle }}</div>
        <div class="text-wrapper-3">{{ getTitleError.title }}</div>
      </div>
      <h3></h3>
      <p></p>
    </div>
  </div>
  <div class="rectangle" />

  <img class="error" alt="Error" :src="errorImage" /> -->
  <div class="element">
    <div class="div">
      <div class="overlap">
        <Header class="header-instance" logo="image.svg" />
        <Header class="design-component-instance-node" logo="logo-2.svg" />
      </div>

      <div class="rectangle" />

      <div class="text">
        <div class="overlap-group">
          <div class="text-wrapper-3">{{ getTitleError.title }}</div>
          <div class="text-wrapper">{{ getTitleError.subtitle }}</div>
          <div class="text-wrapper-2">{{ getTitleError.message }}</div>
        </div>
      </div>

      <img class="error" alt="Error" :src="errorImage" />
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import errorImage from 'src/assets/error.svg'
// props
const props = defineProps({
  code: {
    type: String,
    default: '404'
  }
})

// computed
const getTitleError = computed(() => {
  switch (props.code) {
    case '404':
      return {
        title: 'ошибка',
        subtitle: '404',
        message: 'cтраница не найдена ;('
      }
    case '400':
      return {
        title: 'ошибка',
        subtitle: '400',
        message: 'что то пошло не так ;('
      }
    case '403':
      return {
        title: 'ошибка',
        subtitle: '403',
        message: 'у вас нет прав для просмотра этой страницы ;('
      }
    case '500':
      return {
        title: 'ошибка',
        subtitle: '500',
        message: 'сервис временно недоступен ;('
      }
    default:
      return {
        title: 'ошибка',
        subtitle: '400',
        message: 'что то пошло не так ;('
      }
  }
})
</script>
<style scoped>
@import './styles.css';
</style>
