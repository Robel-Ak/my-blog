// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa84_nyc8f4bWULuyBF3kgZRnFd168_BA",
  authDomain: "my-blog-71636.firebaseapp.com",
  projectId: "my-blog-71636",
  storageBucket: "my-blog-71636.appspot.com",
  messagingSenderId: "758885969456",
  appId: "1:758885969456:web:c854a313558e26b0bdc7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();