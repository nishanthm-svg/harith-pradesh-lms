// ============================================================================
// Firebase project init — Harith Pradesh LMS runs entirely client-side on
// GitHub Pages, using Firebase's free Spark plan for real accounts
// (Authentication) and per-employee progress (Firestore). No server to run
// or maintain. Loaded once here; api.js is the only other file that touches
// the Firebase SDK directly.
// ============================================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDPU7gwOI2qbf-HsZXrKnbitY3a-ZvGTPs",
  authDomain: "harith-pradesh-lms.firebaseapp.com",
  projectId: "harith-pradesh-lms",
  storageBucket: "harith-pradesh-lms.firebasestorage.app",
  messagingSenderId: "588972672992",
  appId: "1:588972672992:web:dc1c8bab26ac3036b68d85",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
