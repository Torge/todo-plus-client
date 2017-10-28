<template>
  <div>
    <button @click="$modal.show('new-ticket')">Add Ticket</button>
    <ul>
      <li v-for="lane in lanes">
        <div>
          {{lane}}
          <ticket v-for="ticket in ticketsOfLane(lane)" :title="ticket.title" :key="ticket.title"/>
        </div>
      </li>
    </ul>
  <new-ticket-modal/>
  </div>
</template>
<script>
  import Ticket from '~/components/Ticket.vue'
  import NewTicketModal from '~/components/NewTicketModal.vue'
  import { mapGetters, mapMutations } from 'vuex'
  const data = {
    showModal: false
  }
  export default {
    components: {
      Ticket,
      NewTicketModal
    },
    data: () => data,
    computed: {
      ...mapGetters(['tickets', 'lanes', 'ticketsOfLane'])
    },
    methods: {
      ...mapMutations(['addTicket'])
    }
  }
</script>
<style>
  ul {
    list-style-type: none;
  }
  li {
    float: left;
    margin: 0 10px
  }
</style>
