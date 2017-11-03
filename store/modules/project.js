export default {
  state: {
    title: 'Test Project',
    lanes: ['Backlog', 'Doing', 'Done'],
    defaultLane: 'Backlog'
  },
  getters: {
    lanes: state => state.lanes,
    ticketsOfLane: (state, getters) => lane => getters['tickets/list'].filter(ticket => ticket.status === lane)
  }
}
