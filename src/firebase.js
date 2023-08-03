// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOCakzXtVeJ3xb5UA3N3vigQDK0rdqXec",
  authDomain: "todo-list-b770d.firebaseapp.com",
  projectId: "todo-list-b770d",
  storageBucket: "todo-list-b770d.appspot.com",
  messagingSenderId: "736140455534",
  appId: "1:736140455534:web:d286a9355d4bb7543f407f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)