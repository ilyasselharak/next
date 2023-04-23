// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
const  firebaseConfig = {
    apiKey: "AIzaSyDtuJNqU-fpvNXfjX4-y7WsuVtVlI1Fono",
    authDomain: "global-catcher-384221.firebaseapp.com",
    projectId: "global-catcher-384221",
    storageBucket: "global-catcher-384221.appspot.com",
    messagingSenderId: "237473753053",
    appId: "1:237473753053:web:cd5ebf69258d16dd5bf834"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, firebaseConfig, auth }