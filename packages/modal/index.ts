// @ts-ignore
import Modal from './index.vue';

Modal.install = (Vue: any) => {
  Vue.component('vue-simple-modal', Modal);
}

export default Modal;