import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBMBkBo_IlRpC1suR6MojRugsUlB0Kraik",
  authDomain: "disneyplus-clone-9f693.firebaseapp.com",
  projectId: "disneyplus-clone-9f693",
  storageBucket: "disneyplus-clone-9f693.appspot.com",
  messagingSenderId: "304220411772",
  appId: "1:304220411772:web:4e37c6223d9b9034a8b6f9",
  measurementId: "G-KKNF36KG1M"
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

