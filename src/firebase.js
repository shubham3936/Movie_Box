// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

//import auth (authentication/authorization) from  firebase
import "firebase/compat/auth"

//import firebasse (databse) from firebase
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBLJH2QaFwRyx4JWlinsP3_qseuaktA930",
  authDomain: "movie-collection-f07b3.firebaseapp.com",
  projectId: "movie-collection-f07b3",
  storageBucket: "movie-collection-f07b3.appspot.com",
  messagingSenderId: "623544416772",
  appId: "1:623544416772:web:e6f28c76928744614b9351",
  measurementId: "G-YQ9PYXE1FT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth, app}
export default db;