<template>
  <v-card class="mx-auto my-12 pa-4" max-width="500">
    <v-card-title>Login</v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>

      <v-text-field v-model="username" label="username" required></v-text-field>
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
      <p v-if="feedback" class="red-text">{{this.feedback}}</p>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="signup">
        Signup
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
    </v-form>
  </v-card>
</template>
<script>

import { db } from '../../firebase/init-firebase'
import firebase from 'firebase'

export default {
  data: () => ({
    show1: false,
    feedback:null,
    valid: true,
    email: "",
    username:"",
    password: "",
    passwordrules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
    },
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    signup(){
      if(this.username && this.email && this.password){
        let ref = db.collection('users').doc(this.username)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback='Username already exists'
          }
          else{
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(cred => {
              ref.set({
                username:this.username,
                user_id:cred.user.uid
              }).then(
                this.$router.push({name:'home', params: {username:this.username}})
              )
            })
            .catch(err => {
              this.feedback=err.message
            })

            this.feedback="username is availiable"
          }
        })
      }
      else{
        this.feedback="you must enter all fields"
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>