<template>
  <div style="width: 100%">
    <button @click="$modal.show('new-ticket')">Add Ticket</button>
    <ul >
      <li v-for="lane in lanes" @dragover.prevent @drop="$store.dispatch('tickets/patch', [$event.dataTransfer.getData('id'), { status: lane}])">
        <div>
          {{lane}}
          <ticket @dragstart.native="$event.dataTransfer.setData('id', ticket._id)" v-for="ticket in ticketsOfLane(lane)" :ticket="ticket" :key="ticket._id" draggable="true"/>
        </div>
      </li>
    </ul>
  <new-ticket-modal :project="project"/>
  </div>
</template>
<script>
  import Ticket from '~/components/Ticket.vue'
  import NewTicketModal from '~/components/NewTicketModal.vue'
  import { mapGetters } from 'vuex'
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
      ...mapGetters(['lanes']),
      project () { return this.$store.getters['projects/get'](this.$route.params.projectId) },
      ticketsOfLane () { return lane => this.$store.getters['tickets/find']({ query: {projectId: this.project._id, status: lane} }).data }
    },
    methods: {
    },
    created () {
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
