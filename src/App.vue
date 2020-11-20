<template>
  <v-app>
    <v-main>
      <navbar :loginStatus="loginStatus" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/layout/Navbar";
import { auth } from "@/firebase/init-firebase";

export default {
  name: "App",
  components: {
    navbar,
  },

  data: () => ({
    loginStatus: false,
  }),
  watch: {
    loginStatus: function () {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.loginStatus = true;
        }
        else{
          this.loginStatus=false
        }
      });
    },
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.loginStatus = true;
      }
      else{
        this.loginStatus=false
      }
    });
  },
};
</script>
