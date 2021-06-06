import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6Xy9zTWPL0blqiE2G2RdP2vuOWNT-qGk",
    authDomain: "teste-login-mani.firebaseapp.com",
    projectId: "teste-login-mani",
    storageBucket: "teste-login-mani.appspot.com",
    messagingSenderId: "275320800232",
    appId: "1:275320800232:web:13a72c37f5e4bd80521a5d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;