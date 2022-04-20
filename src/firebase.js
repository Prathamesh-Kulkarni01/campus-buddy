// Import the functions you need from the SDKs you need
// import { initializeApp} from "firebase/app";
import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWWj6WFMbpkIyXCI-1vfmLi_vQ9kh8GMg",
  authDomain: "campusmasterapi.firebaseapp.com",
  projectId: "campusmasterapi",
  storageBucket: "campusmasterapi.appspot.com",
  messagingSenderId: "348191578541",
  appId: "1:348191578541:web:113eaae5277b2a82dd2924",
  measurementId: "G-1S1FDS9JRL"
};








// Initialize Firebas
const app = firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth();
export const db=firebase.firestore();
export const storage = firebase.storage();
export default app;
