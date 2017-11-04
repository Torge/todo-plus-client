<template>
  <section>
    <ul >
      <li v-for="lane in project.lanes" @dragover.prevent @drop="$store.dispatch('tickets/patch', [$event.dataTransfer.getData('id'), { status: lane}])">
        <div>
          {{lane}}
          <ticket class="mb-2" @dragstart.native="$event.dataTransfer.setData('id', ticket._id)" v-for="ticket in ticketsOfLane(lane)" :ticket="ticket" :key="ticket._id" draggable="true"/>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
  import Ticket from '~/components/Ticket.vue'
  const data = {
    showModal: false
  }
  export default {
    components: {
      Ticket
    },
    data: () => data,
    computed: {
      project () { return this.$store.getters['projects/get'](this.$route.params.projectId) },
      ticketsOfLane () { return lane => this.$store.getters['tickets/find']({ query: {projectId: this.project._id, status: lane} }).data }
    },
    methods: {
    },
    created () {
    }
  }
</script>
<style scoped>
  section {
    width: 100%;
  }
  ul {
    list-style-type: none;
  }
  li {
    float: left;
    padding: 0 10px;
    width: 30%;
  }
</style>
