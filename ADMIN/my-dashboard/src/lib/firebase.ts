import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // ✅ Import Auth
import { getFirestore } from "firebase/firestore";  // ✅ Import Firestore

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_jjKZHg3WGLWcPJ11dRX4q_cMPB-lhI",
  authDomain: "ewaste-admin-e5784.firebaseapp.com",
  projectId: "ewaste-admin-e5784",
  storageBucket: "ewaste-admin-e5784.appspot.com", // ✅ Fixed typo
  messagingSenderId: "162063501520",
  appId: "1:162063501520:web:fcb37973e72c06d5cc36d5",
  measurementId: "G-3J6KR0EWSM"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // ✅ Initialize Auth
const db = getFirestore(app);  // ✅ Initialize Firestore

export { app, auth, db };  // ✅ Make sure auth is exported
