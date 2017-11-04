<template>
  <div>
    <v-dialog v-model="opened" persistent>
      <v-card>
        <v-card-title class="headline">Ticket Erstellen</v-card-title>
        <v-card-text>
          <v-text-field label="Name" v-model="ticket.title" ></v-text-field>
          <v-select label="Project" v-model="ticket.projectId" :items="projectList"></v-select>
          <v-select label="Status" v-model="ticket.status" :items="statusListOfProject" v-bind:disabled="!ticket.projectId"></v-select>
          {{ticket}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" flat="flat" @click.native="opened = false">Abbrechen</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="$store.dispatch('tickets/create', ticket); opened = false">Erstellen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  const data = () => {
    return {
      ticket: {
        title: '',
        projectId: null,
        status: null
      }
    }
  }
  export default {
    data,
    props: ['opened'],
    computed: {
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
    },
    methods: {
      closed () {
        this.ticket = data().ticket
      }
    }
  }
</script>
<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
