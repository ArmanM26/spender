// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getAnalytics } from "firebase/analytics"; // Optional, only if you need analytics

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

// Initialize Authentication
const auth = getAuth(app);

// Initialize Analytics (if needed)
const analytics = getAnalytics(app);

export { auth };
