import { createStore } from 'vuex'

export default createStore({
  state: {
    modalActive: false
  },
  mutations: {
    toggleModal: state => {
      state.modalActive = !state.modalActive;
    }
  },
  actions: {
  },
  modules: {
  }
})
