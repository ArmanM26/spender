// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Add this import for authentication
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv3S9yKH3q0Za0j72XaGUfXHkvTCdM1-w",
  authDomain: "spender-22fce.firebaseapp.com",
  projectId: "spender-22fce",
  storageBucket: "spender-22fce.firebasestorage.app",
  messagingSenderId: "768634793260",
  appId: "1:768634793260:web:b0affbe33f8b71cc6bd089",
  measurementId: "G-VBJ27LNH83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication

export { auth }; // Export the auth instance to be used in other files
