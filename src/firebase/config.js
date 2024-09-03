import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA8MDnp1tnwA2CzQNYrRAqv4pKxfVHE5So",
    authDomain: "mybread-5ba28.firebaseapp.com",
    projectId: "mybread-5ba28",
    storageBucket: "mybread-5ba28.appspot.com",
    messagingSenderId: "922486569216",
    appId: "1:922486569216:web:7d9d97e64835c47b259be5"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }