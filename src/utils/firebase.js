// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCVHZHjUp8dSgFcUn-MfvnDC13HL-X75jo",
  authDomain: "netflixgpt-28.firebaseapp.com",
  projectId: "netflixgpt-28",
  storageBucket: "netflixgpt-28.appspot.com",
  messagingSenderId: "418658450650",
  appId: "1:418658450650:web:a9002b43f5eaed881c39e3",
  measurementId: "G-F9CBV5XKSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
console.log(app);

export const auth = getAuth();