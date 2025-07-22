
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbRRWfSoDWj9Ee3EB9nJZmXJqMYqY3IvQ",
  authDomain: "todo-8d2af.firebaseapp.com",
  databaseURL: "https://todo-8d2af-default-rtdb.firebaseio.com",
  projectId: "todo-8d2af",
  storageBucket: "todo-8d2af.firebasestorage.app",
  messagingSenderId: "97850856174",
  appId: "1:97850856174:web:7686e96764c9ac83e319ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig