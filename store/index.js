import Vuex from 'vuex'
import project from './modules/project'

const createStore = () => {
  return new Vuex.Store({
    state: {
    },
    modules: {
      project
    }
  })
}

export default createStore
