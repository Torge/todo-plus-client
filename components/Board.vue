<template>
  <div style="width: 100%">
    <button @click="$modal.show('new-ticket')">Add Ticket</button>
    <ul>
      <li v-for="lane in lanes">
        <div>
          {{lane}}
          <ticket v-for="ticket in ticketsOfLane(lane)" :title="ticket.title" :key="ticket.title" draggable="true"/>
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
    },
    created () {
      this.$store.dispatch('tickets/find')
    }
  }
</script>
<style>
  ul {
    list-style-type: none;
  }
  li {
    float: left;
    padding: 0 10px;
    width: 33%;
  }
</style>
