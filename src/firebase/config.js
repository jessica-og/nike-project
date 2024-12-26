import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const config = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "nike-project-88f9b.firebaseapp.com",
  projectId: "nike-project-88f9b",
  storageBucket: "nike-project-88f9b.firebasestorage.app",
  messagingSenderId: "852827874488",
  appId: "1:852827874488:web:27a8cde1b43a4cd548c04d"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

