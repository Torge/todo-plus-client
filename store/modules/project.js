export default {
  state: {
    title: 'Test Project',
    tickets: [],
    lanes: ['Backlog', 'Doing', 'Done'],
    defaultLane: 'Backlog'
  },
  getters: {
    tickets: state => state.tickets,
    lanes: state => state.lanes,
    ticketsOfLane: (state, getters) => lane => getters.tickets.filter(ticket => ticket.status === lane)
  },
  mutations: {
    addTicket (state, ticket) {
      console.log(ticket)
      state.tickets.push(ticket)
    }
  }
}
