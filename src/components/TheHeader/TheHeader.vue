<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="emit('click:menu')"
      />

      <q-toolbar-title> Secret Santa App </q-toolbar-title>

      <div>Profile</div>
    </q-toolbar>
  </q-header>
</template>
<script setup>
const emit = defineEmits(["click:menu"]);
</script>
