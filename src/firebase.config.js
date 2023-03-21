
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBEz-mcXJAVutKbExdJC1iwXUjnQv4itoM",
    authDomain: "react-fooddelivery-app.firebaseapp.com",
    databaseURL: "https://react-fooddelivery-app-default-rtdb.firebaseio.com",
    projectId: "react-fooddelivery-app",
    storageBucket: "react-fooddelivery-app.appspot.com",
    messagingSenderId: "443613558020",
    appId: "1:443613558020:web:30d48c09d06b7834bb0c51"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };