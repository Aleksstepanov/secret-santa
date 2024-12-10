<template>
  <div class="error-page">
    <p>{{ getTitleError.title }}</p>
    <h3>{{ getTitleError.subtitle }}</h3>
    <p>{{ getTitleError.message }}</p>
  </div>
</template>
<script setup>
import { computed } from 'vue'

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
        title: 'Ошибка',
        subtitle: '404',
        message: 'Страница не нацдена ;('
      }
    case '400':
      return {
        title: 'Ошибка',
        subtitle: '400',
        message: 'Что то пошло не так ;('
      }
    case '403':
      return {
        title: 'Ошибка',
        subtitle: '403',
        message: 'У вас нет прав для просмотра этой страницы ;('
      }
    case '500':
      return {
        title: 'Ошибка',
        subtitle: '500',
        message: 'Сервис временно недоступен ;('
      }
    default:
      return {
        title: 'Ошибка',
        subtitle: '400',
        message: 'Что то пошло не так ;('
      }
  }
})
</script>
<style scoped>
@import './styles.css';
</style>
