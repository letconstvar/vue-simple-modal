<template>
  <teleport to="body">
    <transition name="__fade">
      <div
        class="__simple-dialog"
        v-if="visible"
        :style="{ background: maskColor }"
        @click.self.stop="handleClose"
      >
        <transition name="__fade">
          <div :style="getDialogStyle()">
            <slot></slot>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>


<script lang="ts" setup>
import { CSSProperties } from 'vue';
import { DialogProp } from './types';

const props = defineProps(DialogProp);

const getDialogStyle = (): CSSProperties => {
  return {
    position: 'absolute',
    top: props.top ? props.top : '50%',
    left: '50%',
    transform: props.top ? 'translateX(-50%)': 'translate(-50%, -50%)',
    ...props.dialogStyle
  }
};

const emit = defineEmits<{
  (e: 'update:visible', value: Boolean): void,
  (e: 'onClose'): void
}>();

const handleClose = () => {
  emit('update:visible', false);
  emit('onClose');
}
</script>


<style>
  .__fade-enter-from,
  .__fade-leave-to {
    transform: translateY(-30px);
    opacity: 0;
  }
  .__fade-enter-to,
  .__fade-leave-from {
    transform: translateY(0px);
    opacity: 1;
  }
  .__fade-enter-active,
  .__fade-leave-active {
    transition: all 0.5s ease-out;
  }
  .__simple-dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
</style>