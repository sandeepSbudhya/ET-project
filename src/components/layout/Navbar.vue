<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar>
      <v-app-bar-nav-icon @click="drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      <v-toolbar-title>
          
          <v-btn
          text
          router-link :to="{name:'welcome'}">
              Home
          </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
       class="mx-2"
       fab
       outlined
       dark
       color="teal"
       router-link :to="{name:'login'}">
        <v-icon>
          mdi-login
        </v-icon>
      </v-btn>
      <span>Login</span>
      <v-spacer></v-spacer>

      <v-btn
       class="mx-2"
       fab
       outlined
       dark
       color="teal"
       router-link :to="{name:'signup'}">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <span>Signup</span>


      <v-spacer></v-spacer>

      <v-btn
       class="mx-2"
       fab
       outlined
       dark
       color="red"
       @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <span>Logout</span>

    </v-toolbar>
  </v-card>
</template>
<script>
import firebase from 'firebase'
export default {
  name:'navbar',
  methods:{
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'welcome'})
      })
    },
    drawer(){
      this.$emit('toggle-drawer')
    }
  }
}
</script>
