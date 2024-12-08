<template>
  <div class="login-form__content">
    <h3 class="login-form__title">Добро пожаловать</h3>
    <q-form class="login-form__form" @submit="onSubmit">
      <UiField direction="column" full-width class="mb-12">
        <p class="login-form__label">Ваше Имя</p>
        <UiInput
          v-model:model-value="fields.fullName"
          label="Ваше имя"
          class="full-width"
          :error-message="validationErrors.fullName.message"
          :error="validationErrors.fullName.invalid"
        />
      </UiField>
      <UiField direction="column" class="mb-12">
        <p class="login-form__label">Почта</p>
        <UiInput
          v-model:model-value="fields.email"
          label="Почта"
          class="full-width"
          :error-message="validationErrors.email.message"
          :error="validationErrors.email.invalid"
        />
      </UiField>
      <UiField direction="column" class="mb-12">
        <p class="login-form__label">Пароль</p>
        <UiInput
          v-model:model-value="fields.password"
          type="password"
          label="Пароль"
          class="full-width"
          :error-message="validationErrors.password.message"
          :error="validationErrors.password.invalid"
        />
      </UiField>
      <UiField direction="row" justify="end" align="center" class="mt-6">
        <UiBtn label="Создать" type="submit" />
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
  fullName: '',
  email: '',
  password: ''
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
