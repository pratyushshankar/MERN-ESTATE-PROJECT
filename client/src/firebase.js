// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "mern-estate-8e7f8.firebaseapp.com",
  projectId: "mern-estate-8e7f8",
  storageBucket: "mern-estate-8e7f8.appspot.com",
  messagingSenderId: "756225789555",
  appId: "1:756225789555:web:0cd07830873fc886852406"
};

// Initialize Firebase
  export  const app = initializeApp(firebaseConfig);