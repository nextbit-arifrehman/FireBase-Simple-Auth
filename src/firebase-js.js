// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtB1yGqVlYkBoa13t7VJUdaXDpu68Zjo",
  authDomain: "simple-firebase-2-8247f.firebaseapp.com",
  projectId: "simple-firebase-2-8247f",
  storageBucket: "simple-firebase-2-8247f.firebasestorage.app",
  messagingSenderId: "25179835404",
  appId: "1:25179835404:web:2d58c2b5344ed7331bb229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 // Initialize Firebase Authentication and get a reference to the serviceconst
 export const auth = getAuth(app);

