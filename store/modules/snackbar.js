export default {
  state: {
    opened: false,
    timeout: 6000,
    color: '',
    text: 'Hello, I\'m a snackbar'
  },
  getters: {
    snackbarTimeout: state => state.timeout,
    snackbarColor: state => state.color,
    snackbarOpened: state => state.opened,
    snackbarText: state => state.text
  },
  mutations: {
    updateSnackbarTimeout (state, payload) { state.timeout = payload },
    updateSnackbarColor (state, payload) { state.color = payload },
    updateSnackbarOpened (state, payload) { state.opened = payload },
    updateSnackbarText (state, payload) { state.text = payload }
  },
  actions: {
    updateSnackbarTimeout ({ commit }, payload) { commit('updateSnackbarTimeout', payload) },
    updateSnackbarColor ({ commit }, payload) { commit('updateSnackbarColor', payload) },
    updateSnackbarOpened ({ commit }, payload) { commit('updateSnackbarOpened', payload) },
    updateSnackbarText ({ commit }, payload) { commit('updateSnackbarText', payload) }
  }
}
