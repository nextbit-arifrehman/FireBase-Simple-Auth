// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ1ip2O9NydEdPDtwC6SmmlC8IDqSX8yA",
  authDomain: "simple-firebase-auth-beadc.firebaseapp.com",
  projectId: "simple-firebase-auth-beadc",
  storageBucket: "simple-firebase-auth-beadc.firebasestorage.app",
  messagingSenderId: "85087529382",
  appId: "1:85087529382:web:98bc8da37f023b87fc8767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);