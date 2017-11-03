import Vuex from 'vuex'
import project from './modules/project'
import feathersVuex from 'feathers-vuex'
import feathersClient from '../api/feathers-client'

const { service } = feathersVuex(feathersClient, { idField: '_id' })

const createStore = () => {
  return new Vuex.Store({
    state: {
    },
    modules: {
      project
    },
    plugins: [
      service('tickets'),
      service('projects')
    ]
  })
}

export default createStore
