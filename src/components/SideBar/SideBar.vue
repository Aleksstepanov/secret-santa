<template>
  <q-drawer v-model="getValue" show-if-above bordered>
    <q-list class="side-bar__list">
      <q-item-label header class="side-bar__title">Меню</q-item-label>

      <q-item v-for="item in navItemsList" :key="item.title">
        <q-item-label class="side-bar__item" @click="router.push(item.to)">
          {{ item.title }}
        </q-item-label>
      </q-item>

      <q-item>
        <q-item-label class="side-bar__item" @click="logout"> Выход </q-item-label>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { navItemsList } from 'src/config'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'stores/auth'

const router = useRouter()
const auth = useAuthStore()

// props
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

// emits
const emit = defineEmits(['update:model-value'])

// computed
const getValue = computed({
  get: () => props.modelValue,
  set: val => emit('update:model-value', val)
})

// mthods
const logout = () => {
  console.log('clic')
  auth.logout()
}
</script>
<style scoped>
@import './styles.css';
</style>
