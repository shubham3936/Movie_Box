// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);