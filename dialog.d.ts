import { DefineComponent, Plugin } from 'vue';
import { TDialogProp } from './packages/dialog/types';

declare const DialogProp: DefineComponent & 
  { install: Exclude<Plugin['install'], undefined> } &
  { $props: TDialogProp };
export default DialogProp