<template>
  <v-app>
    <v-toolbar app fixed clipped-right>
      <v-toolbar-title>ToDo++</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click.native.stop="newTicketModalOpened = true">Erstellen</v-btn>
    </v-toolbar>
    <main>
      <new-ticket-modal :opened="newTicketModalOpened"></new-ticket-modal>
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
import NewTicketModal from '~/components/NewTicketModal.vue'
export default {
  data () {
    return {
      newTicketModalOpened: false,
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null
    }
  },
  components: {
    NewTicketModal
  }
}
</script>

<style>
html {

}
</style>
