import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQfElaSfzKTMAlfQ3FhqW1UkgrtnWV8Bw",
  authDomain: "prepwise-89804.firebaseapp.com",
  projectId: "prepwise-89804",
  storageBucket: "prepwise-89804.firebasestorage.app",
  messagingSenderId: "164042249985",
  appId: "1:164042249985:web:fe8a21f1712770dedd6d00",
  measurementId: "G-1WG3RRS4KQ",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
