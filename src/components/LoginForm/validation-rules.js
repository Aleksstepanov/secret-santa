import { required, email, maxLength, minLength } from '@vuelidate/validators'

const requiredMsg = 'Это поле обязательно к заполнению!'

export default () => {
  return {
    email: {
      email: {
        validator: email,
        message: 'Некорректный email'
      },
      required: {
        validator: required,
        message: requiredMsg
      }
    },
    password: {
      required: {
        validator: required,
        message: requiredMsg
      },
      minLength: {
        validator: minLength(2),
        message: 'Минимальная длинна пароля 2 символа'
      }
    }
  }
}
