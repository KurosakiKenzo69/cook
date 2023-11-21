// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXOY77KLYgMXTqjFnNtERSEoD30sMjfqk",
  authDomain: "cook-405216.firebaseapp.com",
  projectId: "cook-405216",
  storageBucket: "cook-405216.appspot.com",
  messagingSenderId: "186029687543",
  appId: "1:186029687543:web:09be0522003cba72e409f2",
  measurementId: "G-G88K3T73Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();