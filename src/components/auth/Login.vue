<template>
  <v-card class="mx-auto my-12 pa-4" max-width="500">
    <v-card-title>Login</v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[passwordrules.required, passwordrules.min]"
        :type="show1 ? 'text' : 'password'"
        name="password"
        label="password"
        hint="At least 8 characters"
        counter
        @mousedown="show1 = !show1"
        @mouseup="show1 = !show1"
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="login">
        Login
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
      <p v-if="feedback" class="red-text">{{this.feedback}}</p>
    </v-form>
  </v-card>
</template>
<script>
import firebase from 'firebase'
import { db } from '../../firebase/init-firebase'
export default {
  data: () => ({
    show1: false,
    valid: true,
    email: "",
    password: "",
    passwordrules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    feedback:""
  }),

  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            //find the user record and update that name thing
            db.collection("users")
              .where("user_id", "==", cred.user.uid)
              .get()
              .then((snapshot) => {
                snapshot.forEach(() => {
                  this.$router.push({
                    name: "home",
                  });
                });
              });
          })
          .catch((err) => (this.feedback = err.message));

        this.feedback = null;
      } else {
        this.feedback = "Please enter the fields";
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>