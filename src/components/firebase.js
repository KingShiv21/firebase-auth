import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnm77SmEu7t6e6hS5viT7PlZXpzmCOybM",
  authDomain: "login-shiv.firebaseapp.com",
  projectId: "login-shiv",
  storageBucket: "login-shiv.appspot.com",
  messagingSenderId: "742415228262",
  appId: "1:742415228262:web:f2bfdd40b3e61c2ae9bca7"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export default app;