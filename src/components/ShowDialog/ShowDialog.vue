<template>
  <q-dialog :model-value="showDialog" persistent>
    <q-card style="width: 700px; max-width: 80vw">
      <q-card-section v-if="showCloseIcon" class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense @click="$emit('close')" />
      </q-card-section>
      <q-card-section v-if="titleMsg">
        <div class="text-h6">{{ titleMsg }}</div>
      </q-card-section>

      <q-card-section v-if="message" class="q-pt-none">
        {{ message }}
      </q-card-section>

      <slot name="form" />

      <q-card-actions v-if="showBtnActions" align="right" class="bg-white text-teal">
        <q-btn flat label="OK" @click="$emit('confirm')" />
        <q-btn flat label=" Close" @click="$emit('close')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
// emits
const $emit = defineEmits(['confirm', 'close'])
// props
defineProps({
  showDialog: {
    type: Boolean,
    default: false
  },
  titleMsg: {
    type: String,
    default: null
  },
  message: {
    type: String,
    default: null
  },
  showCloseIcon: {
    type: Boolean,
    default: true
  },
  showBtnActions: {
    type: Boolean,
    default: false
  }
})
</script>
