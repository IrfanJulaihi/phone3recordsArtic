import { reactive } from '@vue/reactivity'

export default function useMyState() {
  const state = reactive({
    modal: true,
    popupmodalSuccess: false
  })
  return {
    state
  }
}