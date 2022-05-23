// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// apiKey: "AIzaSyCdBE6PnbVR9qmLhf0iMDvdLukR9X9lkSA",
//   authDomain: "manufacturer-website-1f9e7.firebaseapp.com",
//   projectId: "manufacturer-website-1f9e7",
//   storageBucket: "manufacturer-website-1f9e7.appspot.com",
//   messagingSenderId: "20450905881",
//   appId: "1:20450905881:web:89c5a1349e9e4c5e223f88"