<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../packages/modal/index.vue';

const visible = ref(false);

const handleClose = () => {
  console.log('modal is closed')
};
</script>

<template>
  <Modal 
    v-model:visible="visible" 
    top="10%" 
    @on-close="handleClose" 
    :modal-style="{
      width: '30%',
      height: '400px',
      borderRadius: '2px',
      background: '#fff',
    }"
  >
    modal slot
  </Modal>

  <button @click="visible = true">test modal</button>
</template>
