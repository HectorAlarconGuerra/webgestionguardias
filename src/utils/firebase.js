import firebase from "firebase/app";
//import app from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzIJ79shRRbVU2lzOw3WFqsmObXnSCIfA",
  authDomain: "gestionseguridadserproemcam.firebaseapp.com",
  projectId: "gestionseguridadserproemcam",
  storageBucket: "gestionseguridadserproemcam.appspot.com",
  messagingSenderId: "93139014679",
  appId: "1:93139014679:web:7df6d80f7ea5fd5cfdf852",
  measurementId: "G-KLHH31ZED1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

//export { firebase };
export { db, auth };
