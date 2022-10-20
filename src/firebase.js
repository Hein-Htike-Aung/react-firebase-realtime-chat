import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

/* 
  Activate Authentication,
  Activate Storage,
  Activate Firestore
*/

const firebaseConfig = {
  apiKey: "AIzaSyB2uHSpsF5sjPF3lEzbC7e97SIMOey4qI4",
  authDomain: "react-chat-app-703fa.firebaseapp.com",
  projectId: "react-chat-app-703fa",
  storageBucket: "react-chat-app-703fa.appspot.com",
  messagingSenderId: "542792291790",
  appId: "1:542792291790:web:d8505c587f403275d2079f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
