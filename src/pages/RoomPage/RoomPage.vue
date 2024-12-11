<template>
  <div>Room</div>
</template>
<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  id: {
    type: String,
    default: null
  }
})

onMounted(() => {
  console.log('id', props.id)
})
</script>
