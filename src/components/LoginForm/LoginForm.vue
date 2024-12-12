<template>
  <div class="login-form__content">
    <h3 class="login-form__title">Добро пожаловать</h3>
    <q-form class="login-form__form" @submit="onSubmit">
      <UiField v-show="isRegister" direction="column" full-width class="mb-12">
        <p class="login-form__label">Ваше имя</p>
        <UiInput
          v-model:model-value="fields.fullName"
          outlined
          label="Введите имя"
          class="full-width"
          :loading="loading"
          :disabled="loading"
        />
      </UiField>
      <UiField direction="column" class="mb-12">
        <p class="login-form__label">Почта</p>
        <UiInput
          v-model:model-value="fields.email"
          outlined
          label="Введите почту"
          class="full-width"
          :loading="loading"
          :disabled="loading"
          :error-message="validationErrors.email.message"
          :error="validationErrors.email.invalid"
        />
      </UiField>
      <UiField direction="column" class="mb-12">
        <p class="login-form__label">Пароль</p>
        <UiInput
          v-model:model-value="fields.password"
          outlined
          type="password"
          label="Введите пароль"
          class="full-width"
          :loading="loading"
          :disabled="loading"
          :error-message="validationErrors.password.message"
          :error="validationErrors.password.invalid"
        />
      </UiField>
      <UiField direction="row" justify="end" align="center" class="mt-6">
        <q-checkbox
          v-model="isRegisterModel"
          style="font-size: 18px"
          label="Зарегистрироваться"
        />
      </UiField>
      <UiField direction="row" justify="end" align="center" class="mt-6">
        <UiBtn
          :label="isRegister ? 'Зарегистрироваться' : 'Войти'"
          :class="isRegister ? 'reg' : ''"
          type="submit"
          :loading="loading"
        />
      </UiField>
    </q-form>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import { UiInput } from 'src/components/UiInput'
import { UiField } from 'src/components/UiField'
import { UiBtn } from 'src/components/UiBtn'
import { useForm, useFormProps } from 'src/composibles'
import validationRules from './validation-rules'

// emits
const emit = defineEmits(['submit', 'update:register'])

// props
const props = defineProps({
  ...useFormProps(),
  isRegister: {
    type: Boolean,
    default: true
  }
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
const isRegisterModel = computed({
  get: () => props.isRegister,
  set: val => emit('update:register', val)
})
</script>
<style scoped>
@import './styles.css';
</style>
