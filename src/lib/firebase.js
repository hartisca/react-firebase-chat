import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-a21df.firebaseapp.com",
  projectId: "reactchatapp-a21df",
  storageBucket: "reactchatapp-a21df.appspot.com",
  messagingSenderId: "1011373992373",
  appId: "1:1011373992373:web:0918563c956f51a90191fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
