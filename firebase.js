import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  get,
  push
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxM8obPXNp-xCqjq2NpF02lxcYGGUaiuw",
  authDomain: "who-s-the-impostor.firebaseapp.com",
  databaseURL: "https://who-s-the-impostor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "who-s-the-impostor",
  storageBucket: "who-s-the-impostor.firebasestorage.app",
  messagingSenderId: "778331849640",
  appId: "1:778331849640:web:bfdda334224695761ed39d",
  measurementId: "G-1KNPYSL4MJ"
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export { ref, set, get, push };