// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1mVec5m3LK-KIwKKNmLaxpAT9qOuFIPQ",
  authDomain: "blog-vue-3c455.firebaseapp.com",
  databaseURL: "https://blog-vue-3c455.firebaseio.com",
  projectId: "blog-vue-3c455",
  storageBucket: "blog-vue-3c455.appspot.com",
  messagingSenderId: "611038548698",
  appId: "1:611038548698:web:a2ba8bd77f7b2daa644be3",
  measurementId: "G-CCT36917MJ"
};

firebase.initializeApp(firebaseConfig);
// utils
const db = firebase.firestore()
const auth = firebase.auth()


// export utils/refs
export {
  db,
  auth,
}