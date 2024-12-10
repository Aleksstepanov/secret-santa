<template>
  <div style="width: 100%">
    <TableWrapper :class-list="classList" :columns="headersConfig" :rows="data" />
  </div>
</template>
<script setup>
import headersConfig from './headersConfig'
import { TableWrapper } from 'components/TableWrapper'

defineProps({
  classList: {
    type: String,
    default: 'q-pa-md'
  },
  data: {
    type: Array,
    default: () => []
  }
})
</script>
