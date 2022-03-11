// @ts-ignore
import Dialog from './index.vue';

Dialog.install = (Vue: any) => {
  Vue.component('vue-simple-dialog', Dialog);
}

export default Dialog;