// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCso8dpV5r3Rz9Y-51MCA1qEmtMIxJJtg",
  authDomain: "blog-app-45971.firebaseapp.com",
  projectId: "blog-app-45971",
  storageBucket: "blog-app-45971.appspot.com",
  messagingSenderId: "785572311302",
  appId: "1:785572311302:web:6f3d04cebb7febeac16e87"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth }