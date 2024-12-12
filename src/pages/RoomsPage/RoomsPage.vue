<template>
  <div class="page-rooms">
    <PagePreLoader v-if="state.isLoading" />
    <PageHeader :title="title" />
    <GridRoomsPage :data="getFilteredRooms" />
    <div class="page-rooms__button">
      <UiBtn label="Создать комнату" @click="state.showModal = true" />
    </div>
  </div>
  <ShowDialog v-model:show-dialog="state.showModal" @close="state.showModal = false">
    <template #form>
      <RoomForm class="roomform" @submit="onCreateRoom" />
    </template>
  </ShowDialog>
</template>
<script setup>
import { computed, reactive, onMounted } from 'vue'
import { PageHeader } from 'components/PageHeader'
import { useRoute } from 'vue-router'
import { GridRoomsPage } from './grid'
import { PagePreLoader } from 'components/PagePreloader'
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
  showModal: false,
  rooms: null
})

const filter = computed(() => route.params.filter)
const title = computed(() =>
  filter.value === 'all' ? 'Все комнаты' : 'Название комнаты'
)
const getFilteredRooms = computed(
  () =>
    state?.rooms?.map(room => ({
      name: room.name,
      description: room.description,
      status: room.is_started ? 'Игра началась' : 'Игра не началась'
    })) || []
)
const onCreateRoom = async payload => {
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
        message: `Вы создали комнату!`
      })
      await fetchRooms()
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
const fetchRooms = async () => {
  state.isLoading = true
  try {
    const res = await api.get('/room/my')
    if (res?.status === 200) {
      const { rooms } = res?.data || {}
      state.rooms = rooms
    }
  } catch (error) {
    emitter.emit('notify', {
      type: 'negative',
      message: `Ошибка создания. ${error?.message || ''}`
    })
  } finally {
    state.isLoading = false
  }
}

onMounted(async () => {
  await fetchRooms()
})
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
