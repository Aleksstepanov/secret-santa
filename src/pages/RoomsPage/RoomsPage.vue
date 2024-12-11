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

const onCreateRoom = payload => {
  console.log(payload)
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
