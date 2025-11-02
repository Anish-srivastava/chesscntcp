import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//you can either add your firebase config directly like in the tutorial or can also add it as an
//json string like here https://create-react-app.dev/docs/adding-custom-environment-variables/

const config = {

  apiKey: "AIzaSyDBIzHwrLiGJrHhQMEb_OfPe-GIj80177U",
  authDomain: "react-chess-p.firebaseapp.com",
  projectId: "react-chess-p",
  storageBucket: "react-chess-p.firebasestorage.app",
  messagingSenderId: "558131771571",
  appId: "1:558131771571:web:a273d889b5db82d3d858c6",
  measurementId: "G-D4R1SS7YK1"
};

const firebaseConfig = config;
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
