// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9sUipWoQggQWrH2mvwEH2anCICzVtLTk",
  authDomain: "etproject-a41b4.firebaseapp.com",
  databaseURL: "https://etproject-a41b4.firebaseio.com",
  projectId: "etproject-a41b4",
  storageBucket: "etproject-a41b4.appspot.com",
  messagingSenderId: "925301899104",
  appId: "1:925301899104:web:734130694b4d8631166805",
  measurementId: "G-1WQN86JMMT"
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