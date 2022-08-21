// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf7DF2gzt8zbJurbolE-U_Js8Hg2saaLU",
  authDomain: "fxchat-2153a.firebaseapp.com",
  databaseURL: "http://fxchat-2153a.firebaseio.com",
  projectId: "fxchat-2153a",
  storageBucket: "fxchat-2153a.appspot.com",
  messagingSenderId: "796029502125",
  appId: "1:796029502125:web:d3aa3313f9532ccbcf3c24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
