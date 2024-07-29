// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAApjl8_TJse4MXeDpM2pjLfJTkBKOUGr4",
  authDomain: "netflixgpt-5c1d4.firebaseapp.com",
  projectId: "netflixgpt-5c1d4",
  storageBucket: "netflixgpt-5c1d4.appspot.com",
  messagingSenderId: "380579374239",
  appId: "1:380579374239:web:4c651cbc5ed1afcb79aeaa",
  measurementId: "G-SJ5GTYQYN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();