import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7QpS_eB4cHrOlSbE99_8tVYac6HxQ9kA",
  authDomain: "barber-app-de636.firebaseapp.com",
  projectId: "barber-app-de636",
  storageBucket: "barber-app-de636.appspot.com",
  messagingSenderId: "1005107947819",
  appId: "1:1005107947819:web:f25e05c7ec330558b4bd6e",
  measurementId: "G-N0PK5M7L93"
};

export const app = initializeApp(firebaseConfig);