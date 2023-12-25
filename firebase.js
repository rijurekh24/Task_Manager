import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBhFLlPbp4erKTqtAKgmkIiMMFGv-RDSFA",
  authDomain: "task-management-app-23b99.firebaseapp.com",
  projectId: "task-management-app-23b99",
  storageBucket: "task-management-app-23b99.appspot.com",
  messagingSenderId: "76077071536",
  appId: "1:76077071536:web:5099efea0ee1535dfdcf75",
  measurementId: "G-H6LJDE0ZW8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
