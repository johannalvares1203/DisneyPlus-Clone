import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGf6Ho38gdLWsP4DclkZxFhPzSKpiDSKc",
  authDomain: "disney-plus-834a8.firebaseapp.com",
  projectId: "disney-plus-834a8",
  storageBucket: "disney-plus-834a8.appspot.com",
  messagingSenderId: "320414342121",
  appId: "1:320414342121:web:ab50fdab50562b81c58978",
  measurementId: "G-H027VTD4MV"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;   