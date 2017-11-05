<template>
  <v-navigation-drawer right clipped enable-resize-watcher app>
    <v-card>
      <v-card-title class="headline">Ticket Editieren</v-card-title>
      <v-card-text>
        <v-text-field label="Name" v-model="ticket.title" ></v-text-field>
        <v-select label="Project" v-model="ticket.projectId" :items="projectList"></v-select>
        <v-select label="Status" v-model="ticket.status" :items="statusListOfProject" v-bind:disabled="!ticket.projectId"></v-select>
        {{ticket}}
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
  export default {
    props: ['opened', 'ticketId'],
    computed: {
      ticket () {
        return this.$store.getters['tickets/get'](this.ticketId)
      },
      projectList () {
        return this.$store.getters['projects/list'].reduce((prev, cur) => {
          prev.push({'text': cur.name, 'value': cur._id})
          return prev
        }, [])
      },
      statusListOfProject () {
        let project = this.$store.getters['projects/get'](this.ticket.projectId)
        return project ? project.lanes : []
      },
      disableStatus () {
        return !this.ticket.projectId
      }
    }
  }
</script>
<style scoped>

</style>
