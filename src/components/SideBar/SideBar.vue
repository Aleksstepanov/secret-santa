<template>
  <q-drawer v-model="getValue" show-if-above bordered>
    <q-list>
      <q-item-label header> Menu </q-item-label>

      <span>{{ 'Menu list...' }}</span>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { computed } from 'vue'

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
</script>
