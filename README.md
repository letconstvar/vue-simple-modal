# vue-simple-dialog



## Installation

```
npm i vue-simple-dialog -D
```

## Description

a lightweight customizable dialog box

## API

| Property   | Description                      | Type          | Default                                               | Required |
| ---------- | -------------------------------- | ------------- | ----------------------------------------------------- | -------- |
| visible    | whether the dialog box is visible | boolean       |                                                       | true     |
| top        | value for `top` of dialog CSS     | string        | false                                                 | false    |
| maskColor  | mask `background-color`          | string        | rgba(0,0,0,.45)                                       | false    |
| dialogStyle | dialog style                      | CSSProperties | { width: '30%', height: '400px', background: '#fff' } | false    |

### event

| Events Name | Description                                     | Arguments  | Version |
| :---------- | :---------------------------------------------- | :--------- | :------ |
| on-close    | triggers when the dialog closes | () => void |         |



## Using

main.ts

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import vueSimpleDialog from 'vue-simple-dialog';
import 'vue-simple-dialog/dist/style.css';

createApp(App).use(vueSimpleDialog).mount('#app')
```



## Example

demo.vue

```vue
<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const handleClose = () => {
  console.log('dialog is closed')
};
</script>

<template>
  <vue-simple-dialog 
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
  </vue-simple-dialog>
  <button @click="visible = true">test dialog</button>
</template>
```



