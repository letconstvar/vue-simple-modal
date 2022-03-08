# vue-simple-modal



## Installation

```
npm i vue-simple-modal -D
```

## Description



## API

| Property   | Description                      | Type          | Default                                               | Required |
| ---------- | -------------------------------- | ------------- | ----------------------------------------------------- | -------- |
| visible    | whether the modal box is visible | boolean       |                                                       | true     |
| top        | value for `top` of modal CSS     | string        | false                                                 | false    |
| maskColor  | mask `background-color`          | string        | rgba(0,0,0,.45)                                       | false    |
| modalStyle | modal style                      | CSSProperties | { width: '30%', height: '400px', background: '#fff' } | false    |

### event

| Events Name | Description                                     | Arguments  | Version |
| :---------- | :---------------------------------------------- | :--------- | :------ |
| on-close    | triggered when the container reaches the bottom | () => void |         |



## Using

main.js

```javascript
import { createApp } from 'vue'
import App from './App.vue'

import VueSimpleScroller from 'vue-simple-scroller';
import 'vue-simple-scroller/dist/style.css';

createApp(App).use(VueSimpleScroller).mount('#app')
```



## Example

demo.vue

```vue
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
```



