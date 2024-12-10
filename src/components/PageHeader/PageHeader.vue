<template>
  <q-toolbar>
    <q-toolbar-title>{{ title }}</q-toolbar-title>
  </q-toolbar>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
