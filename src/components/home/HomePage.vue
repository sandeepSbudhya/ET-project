<template>
  <v-card tile flat class="mx-auto overflow-hidden" height="100%">
    <v-app-bar color="deep-purple accent-4" dark dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-card flat v-if="group == 0">

    
    </v-card>
    <v-card flat v-if="group == 1">
      <v-card>
        {{ username }}
      </v-card>
    </v-card>
    <v-card tile flat v-if="group == 2">

    </v-card>
    <v-card tile flat v-if="group == 3" >
      <v-container>
        <h1>Pick a file</h1>
        <v-file-input @change="onUpload" accept="image/*">P</v-file-input>   
      </v-container>
    </v-card>
  </v-card>
</template>
<script>
import firebase from "firebase"

export default {
  name: "HomePage",
  components: {
    
  },
  props: {
    username: {
      required: true,
    },
  },
  data: () => ({
    drawer: true,
    group: null,
    posts: [],
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Profile", icon: "mdi-image" },
      { title: "Create New", icon: "mdi-help-box" },
      { title: "Upload Document", icon: "mdi-upload" }
    ],
    fileData:null,
  }),
  methods:{
onUpload(){
  this.fileData = event.target.files[0];
  firebase.storage().ref(`${this.fileData.name}`).put(this.fileData).then(
  alert('Succesfully uploaded'));
 },
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>