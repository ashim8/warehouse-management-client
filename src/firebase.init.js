// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQBkdfW0ZvtZAuX6l0s0gOBk5kernLyho",
  authDomain: "assignment-11-51429.firebaseapp.com",
  projectId: "assignment-11-51429",
  storageBucket: "assignment-11-51429.appspot.com",
  messagingSenderId: "493059636967",
  appId: "1:493059636967:web:4d475a85d94099e9d6ec42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;