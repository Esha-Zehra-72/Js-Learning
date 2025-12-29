// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe7QcmxvwCK8za0fhfIjqtq0MMgFjUASo",
  authDomain: "chat-messages-3d75b.firebaseapp.com",
  projectId: "chat-messages-3d75b",
  storageBucket: "chat-messages-3d75b.firebasestorage.app",
  messagingSenderId: "606773026132",
  appId: "1:606773026132:web:f5548dc10f50ba70b4bcc1",
  measurementId: "G-DD6WY2X9E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
