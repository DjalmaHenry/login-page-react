import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA32dSLn99U4SSbzB9PKQc1T2zY9ZdpJSM",
    authDomain: "login-page-react-3ab9b.firebaseapp.com",
    projectId: "login-page-react-3ab9b",
    storageBucket: "login-page-react-3ab9b.appspot.com",
    messagingSenderId: "776234849099",
    appId: "1:776234849099:web:3a02cd9335dafccee48ece"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;