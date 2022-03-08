import { CSSProperties, ExtractPropTypes, PropType } from 'vue';

export const ModalProp = {
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
  modalStyle: {
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

export type TModalProp = ExtractPropTypes<typeof ModalProp>