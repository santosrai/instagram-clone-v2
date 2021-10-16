// Import the functions you need from the SDKs you need
import { initializeApp ,getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoVtqCkd01JPH628GwdVH4cmY2iBxKvLk",
  authDomain: "instagram-clone-3c3dd.firebaseapp.com",
  databaseURL: "https://instagram-clone-3c3dd.firebaseio.com",
  projectId: "instagram-clone-3c3dd",
  storageBucket: "instagram-clone-3c3dd.appspot.com",
  messagingSenderId: "588757475852",
  appId: "1:588757475852:web:412d1e2539a6f26406c429",
  measurementId: "G-BR9DQT5VCY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = app.firestore();
const storage = app.storage();

export { app, db, storage };
