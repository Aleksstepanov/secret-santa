<template>
  <q-input v-model:modelValue="getValue" class="input" />
</template>
<script setup>
import { computed } from 'vue'

// props
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

// emit
const emit = defineEmits(['update:modelValue'])

// computed
const getValue = computed({
  get: () => props.modelValue,
  set: newValue => emit('update:modelValue', newValue)
})
</script>
<style scoped>
@import './styles.css';
</style>
