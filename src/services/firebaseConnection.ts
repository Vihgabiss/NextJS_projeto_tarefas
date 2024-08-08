import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEiBpkODtObAy1NaKPLNpTEAcY04wZwH0",
  authDomain: "tarefasplus-755b9.firebaseapp.com",
  projectId: "tarefasplus-755b9",
  storageBucket: "tarefasplus-755b9.appspot.com",
  messagingSenderId: "598967283150",
  appId: "1:598967283150:web:6997b92a0504de43914f9f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export{ db };