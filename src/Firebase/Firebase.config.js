// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7FpC_w0NCN9Hbq4e3x8855yEKHWW35q4",
  authDomain: "scc-technovision-inc-16489.firebaseapp.com",
  projectId: "scc-technovision-inc-16489",
  storageBucket: "scc-technovision-inc-16489.appspot.com",
  messagingSenderId: "216077151549",
  appId: "1:216077151549:web:e83658f655e3d999056954"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;