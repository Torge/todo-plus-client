<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>ToDo++</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.native.stop="newTicketModalOpened = true">Erstellen</v-btn>

      <v-dialog v-model="newTicketModalOpened" persistent >
        <v-card>
          <v-card-title class="headline">Ticket Erstellen</v-card-title>
          <v-card-text>
            <v-text-field label="Name" v-model="newTicket.title" ></v-text-field>
            <v-select label="Project" v-model="newTicket.projectId" :items="projectList"></v-select>
            <v-select label="Status" v-model="newTicket.status" :items="statusListOfProject" v-bind:disabled="!newTicket.projectId"></v-select>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" flat="flat" @click.native="newTicketModalOpened = false">Abbrechen</v-btn>
            <v-btn color="green darken-1" flat="flat" @click.native="$store.dispatch('tickets/create', newTicket); newTicketModalOpened = false">Erstellen</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>
    <main>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-snackbar
      :timeout="$store.getters.snackbarTimeout"
      :color="$store.getters.snackbarColor"
      :value="$store.getters.snackbarOpened"
      @input="res => $store.dispatch('updateSnackbarOpened', res)">

      {{ $store.getters.snackbarText }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
    </main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      newTicketModalOpened: false,
      newTicket: {}
    }
  },
  computed: {
    buildTicket () {
      console.log(this.$route.params.projectId)
      return {
        ...this.newTicket,
        projectId: this.$route.params.projectId
      }
    },
    projectList () {
      return this.$store.getters['projects/list'].reduce((prev, cur) => {
        prev.push({'text': cur.name, 'value': cur._id})
        return prev
      }, [])
    },
    statusListOfProject () {
      let project = this.$store.getters['projects/get'](this.newTicket.projectId)
      console.log(this.newTicket.projectId, project)
      return project ? project.lanes : ['Hier ist nichts']
    },
    disableStatus () {
      return !this.newTicket.projectId
    }
  }
}
</script>

<style>
html {

}
</style>
