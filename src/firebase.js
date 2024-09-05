// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtVURP5uRsC5v8pazFSBunuljOz3QODnI",
  authDomain: "flipkart-clone-9751c.firebaseapp.com",
  projectId: "flipkart-clone-9751c",
  storageBucket: "flipkart-clone-9751c.appspot.com",
  messagingSenderId: "638141187166",
  appId: "1:638141187166:web:f075a6f0bd2082f65860cf",
  measurementId: "G-3HFJB262NH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
