<template>
  <div class="login-form__content">
    <h3 class="login-form__title">Создать комнату</h3>
    <q-form class="login-form__form" @submit="onSubmit">
      <UiField direction="column" full-width class="mb-12">
        <p class="login-form__label">Название комнаты</p>
        <UiInput
          v-model:model-value="fields.name"
          outlined
          label="Введите название"
          class="full-width"
          :error-message="validationErrors.name.message"
          :error="validationErrors.name.invalid"
          :loading="loading"
          :disabled="loading"
        />
      </UiField>
      <UiField direction="column" class="mb-12">
        <p class="login-form__label">Описание</p>
        <UiInput
          v-model:model-value="fields.description"
          outlined
          label="Введите описание"
          class="full-width"
          :loading="loading"
          :disabled="loading"
        />
      </UiField>
      <UiField direction="row" justify="end" align="center" class="mt-6">
        <UiBtn label="Создать" type="submit" :loading="loading" />
      </UiField>
    </q-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { UiInput } from 'src/components/UiInput'
import { UiField } from 'src/components/UiField'
import { UiBtn } from 'src/components/UiBtn'
import { useForm, useFormProps } from 'src/composibles'
import validationRules from './validation-rules'

// emits
const emit = defineEmits(['submit'])

// props
const props = defineProps({
  ...useFormProps()
})

const fields = reactive({
  name: '',
  description: ''
})

const onSubmit = async () => {
  const formData = await submit()
  if (formData) {
    emit('submit', formData)
  }
}

// computed
const { validationErrors, submit } = useForm({
  fields,
  rules: validationRules()
})
</script>
<style scoped>
@import './styles.css';
</style>
