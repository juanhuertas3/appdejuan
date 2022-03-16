// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiGevB2yC423zF5RM4a59g5o60w8lBCJU",
  authDomain: "juanfirebase33.firebaseapp.com",
  projectId: "juanfirebase33",
  storageBucket: "juanfirebase33.appspot.com",
  messagingSenderId: "691008616173",
  appId: "1:691008616173:web:cac73af61b2d3258dd3ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);