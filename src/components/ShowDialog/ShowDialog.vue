<template>
  <q-dialog :model-value="showDialog">
    <q-card style="width: 700px; max-width: 80vw;">
      <q-card-section>
        <div class="text-h6">{{ titleMsg }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ message }}
      </q-card-section>

      <q-card-actions align="right"
                      class="bg-white text-teal">
        <q-btn flat
               label="OK"
               @click="$emit('confirm')" />
        <q-btn v-close-popup
               flat
               label=" Close" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
// emits
const $emit = defineEmits(['confirm'])
// props
defineProps({
  showDialog: {
    type: Boolean,
    default: false
  },
  titleMsg: {
    type: String,
    default: 'Выход'
  },
  message: {
    type: String,
    default: 'вы действительно хотите выйти?'
  }
})

</script>
