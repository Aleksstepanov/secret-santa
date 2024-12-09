<template>
  <q-header elevated class="header">
    <q-toolbar>
      <q-btn
        v-if="showBtnMenu"
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="emit('click:menu')"
      />

      <q-toolbar-title>
        <UiLogo class="logo" />
      </q-toolbar-title>

      <div v-if="showProfile">Profile</div>
    </q-toolbar>
  </q-header>
</template>
<script setup>
import { UiLogo } from 'src/components/UiLogo'

// props
defineProps({
  showBtnMenu: {
    type: Boolean,
    default: false
  },
  showProfile: {
    type: Boolean,
    default: false
  }
})
// emits
const emit = defineEmits(['click:menu'])
</script>
<style>
.header {
  background-color: #ab3432;
  width: 100%;
  height: 10%;
}
.logo {
  width: 16%;
  height: 63px;
  margin-top: 9px;
  margin-left: 20px;
}
</style>
