// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpHH9tJvygYC5A2LyAZ0WoCI5VfQ78IvA",
  authDomain: "myfoodgo-2dcc0.firebaseapp.com",
  projectId: "myfoodgo-2dcc0",
  storageBucket: "myfoodgo-2dcc0.appspot.com",
  messagingSenderId: "246914787258",
  appId: "1:246914787258:web:a8a2dba5c56a12d0235f83",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
