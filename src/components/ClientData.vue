<template>
  <v-card elevation="2">
     <v-toolbar
      :color="isDarkTheme ? 'pink darken-2': 'grey darken-4'"
      dark
    >

      <v-toolbar-title>
        Dane klienta
      </v-toolbar-title>

    </v-toolbar>
    <v-card-text
      ><span><b>Imię: </b>{{ client.name }}</span
      ><br />
      <span><b>Nazwisko: </b>{{ client.surname }}</span></v-card-text
    >
    <v-card-actions>
      <v-btn @click="openDetails">Szczegóły</v-btn>
    </v-card-actions>


    <ClientDataDetails v-model="dialog" v-if="dialogInitialized" />
  </v-card>
</template>
<script>

//import ClientDataDetails from './ClientDataDetails.vue'
import {isDarkTheme} from '../mixins/isDarkTheme';

export default {
  mixins: [isDarkTheme],
  components: {
    "ClientDataDetails": () => import('./ClientDataDetails')
  },
  data: () => ({
    client: {
      name: 'przykladowe imie',
      surname: 'przykladowe nazwisko'
    },
    dialog: false,
    dialogInitialized: false
  }),
  watch: {
    isDarkTheme() {
      console.log("Zmienił się isDarkTheme", this.isDarkTheme);

    }
  },
  methods: {
    openDetails() {
      this.dialogInitialized = true;
      this.dialog = true
      
    }
  }
};
</script>

<style>
.clientData {
  font-size: 20px;
}
</style>
