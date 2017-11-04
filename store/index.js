import Vuex from 'vuex'
import snackbar from './modules/snackbar'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

const { service } = feathersVuex(feathersClient, { idField: '_id' })

const createStore = () => {
  return new Vuex.Store({
    state: { },
    actions: {
      async nuxtServerInit ({ dispatch }) {
        await dispatch('projects/find')
      }
    },
    modules: {
      snackbar
    },
    plugins: [
      service('tickets'),
      service('projects')
    ]
  })
}

export default createStore
