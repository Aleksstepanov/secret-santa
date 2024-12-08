<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader show-btn-menu show-profile @click:menu="toggleLeftDrawer" />

    <SideBar v-model:model-value="leftDrawerOpen" />

    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter />
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { TheHeader } from 'src/components/TheHeader'
import { SideBar } from 'src/components/SideBar'
import { TheFooter } from 'src/components/TheFooter'

defineOptions({
  name: 'LayoutDefault'
})

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
