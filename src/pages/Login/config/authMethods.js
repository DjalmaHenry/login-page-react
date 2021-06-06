import firebase from "./firebase-config";
import "firebase/auth";

export const googleProvider = new firebase.auth.googleAuthProvider();