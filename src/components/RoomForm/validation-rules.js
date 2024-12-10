import { required, maxLength } from '@vuelidate/validators'

const requiredMsg = 'Это поле обязательно к заполнению!'

export default () => {
  return {
    name: {
      required: {
        validator: required,
        message: requiredMsg
      },
      maxLength: {
        validator: maxLength(50),
        message: 'Максимальная длинна Имени - 50 символов'
      }
    }
  }
}
