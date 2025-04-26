import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbua898ndQs7i6mBeMAUXZJn6E2UsTQis",
  authDomain: "ewaste-b5ba9.firebaseapp.com",
  projectId: "ewaste-b5ba9",
  storageBucket: "ewaste-b5ba9.appspot.com",
  messagingSenderId: "934295179369",
  appId: "1:934295179369:android:c89527f2be9ce5300c92f8",
};

// Ensure Firebase isn't initialized multiple times
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
