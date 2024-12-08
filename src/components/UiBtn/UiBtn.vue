<template>
  <q-btn
    :label="label"
    :loading="loading"
    :disable="disable"
    :icon="icon"
    v-bind="other"
    class="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </q-btn>
</template>
<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: null
  },
  other: {
    type: Object,
    default: () => null
  },
  emit: {
    type: String,
    default: 'click'
  }
})

// emits
const $emit = defineEmits(['click'])
</script>
<style scoped>
@import 'styles.css';
</style>
