// store/index.js
import { createStore } from 'vuex'

export const state = () => ({
    modal: true,
    popupmodalSuccess:false
})

// contains your actions
export const mutations = {
    modalHideShow({ state }) {
        state.modal=!state.modal
      }

  }
  // contains your mutations
  export const actions = {
    setCounter(state, value){
      state.counter = value
    }
  }

export const store = createStore({
  state,
  mutations,
  actions
})





