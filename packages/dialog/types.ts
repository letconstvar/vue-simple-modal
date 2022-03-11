import { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const DialogProp = {
  top: {
    type: String
  },
  visible: {
    type: Boolean,
    required: true
  },
  maskColor: {
    type: String,
    default: 'rgba(0,0,0,.45)'
  },
  dialogStyle: {
    type: Object as PropType<CSSProperties>,
    default: () => {
      return {
        width: '30%',
        height: '400px',
        background: '#fff'
      }
    }
  },
  
} as const

export type TDialogProp = ExtractPropTypes<typeof DialogProp>