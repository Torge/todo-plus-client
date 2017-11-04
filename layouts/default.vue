<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title>ToDo++</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>Erstellen</v-btn>
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

<style>
html {

}
</style>
