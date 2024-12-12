<template>
  <div class="room_label">Название комнаты:</div>
</template>
<script setup>
import { onMounted } from 'vue'
import { api } from 'src/boot/axios'

const props = defineProps({
  id: {
    type: String,
    default: null
  }
})

onMounted(async () => {
  console.log('id', props.id)
  const data = await api.get('/room/' + props.id + '/details')
  console.log(data.data)
})
</script>
