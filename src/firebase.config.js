import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCac3Cq4sMWu7waZDboXhaRB8DWertQ-ts",
  authDomain: "popx-6a72c.firebaseapp.com",
  projectId: "popx-6a72c",
  storageBucket: "popx-6a72c.appspot.com",
  messagingSenderId: "205763087679",
  appId: "1:205763087679:web:8cb52417dc7283462f578a",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
