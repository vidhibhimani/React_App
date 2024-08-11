// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5O4L0QVVGbC89GxFNfwsoJgghbZ_nvWc",
  authDomain: "react-2bdbd.firebaseapp.com",
  projectId: "react-2bdbd",
  storageBucket: "react-2bdbd.appspot.com",
  messagingSenderId: "895104751401",
  appId: "1:895104751401:web:1b1d95b76a5b86c0cd0938",
  measurementId: "G-M6L6RDZLF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app) 