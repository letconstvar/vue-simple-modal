<script setup lang="ts">
import { ref } from 'vue';
import Dialog from '../packages/dialog/index.vue';

const visible = ref(false);

const handleClose = () => {
  console.log('dialog is closed')
};
</script>

<template>
  <Dialog 
    v-model:visible="visible" 
    top="10%" 
    @on-close="handleClose" 
    :dialog-style="{
      width: '30%',
      height: '400px',
      borderRadius: '2px',
      background: '#fff',
    }"
  >
    dialog slot
  </Dialog>

  <button @click="visible = true">test dialog</button>
</template>
