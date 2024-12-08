<template>
  <q-header elevated>
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
        <UiLogo />
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
