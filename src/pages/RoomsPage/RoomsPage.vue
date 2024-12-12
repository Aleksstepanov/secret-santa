<template>
  <div class="page-rooms">
    <PageHeader :title="title" />
    <GridRoomsPage />
    <div class="page-rooms__button">
      <UiBtn label="Создать комнату" @click="state.showModal = true" />
    </div>
  </div>
  <ShowDialog v-model:show-dialog="state.showModal" @close="state.showModal = false">
    <template #form>
      <RoomForm @submit="onCreateRoom" />
    </template>
  </ShowDialog>
</template>
<script setup>
import { computed, reactive } from 'vue'
import { PageHeader } from 'components/PageHeader'
import { useRoute } from 'vue-router'
import { GridRoomsPage } from './grid'
import { UiBtn } from 'components/UiBtn'
import { ShowDialog } from 'components/ShowDialog'
import { RoomForm } from 'components/RoomForm'
import { emitter } from 'src/plugins'
import { api } from 'src/boot/axios'

defineOptions({
  name: 'RoomsPage'
})

const route = useRoute()

const state = reactive({
  showModal: false
})

const filter = computed(() => route.params.filter)
const title = computed(() =>
  filter.value === 'all' ? 'Все комнаты' : 'Название комнаты'
)

const onCreateRoom = async payload => {
  console.log(payload)
  const { name, description } = payload
  try {
    const data = await api.post(
      '/room/create',
      {
        name,
        description
      },
      {
        mode: 'cors'
      }
    )
    if (data?.status === 200) {
      emitter.emit('notify', {
        type: 'success',
        message: `Вы создали комнату! Обновите страницу!`
      })
    }
  } catch (error) {
    console.log(error)
    emitter.emit('notify', {
      type: 'negative',
      message: `Ошибка создания. ${error?.message || ''}`
    })
  }
  state.showModal = false
}
</script>
<style>
.page-rooms__button {
  display: flex;
  flex-direction: row;
  justify-content: right;
  padding: 16px;
  border-radius: 22px;
}
</style>
