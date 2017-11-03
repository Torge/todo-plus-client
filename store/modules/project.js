export default {
  state: {
    title: 'Test Project',
    lanes: ['Backlog', 'Doing', 'Done'],
    defaultLane: 'Backlog'
  },
  getters: {
    lanes: state => state.lanes
  }
}
