
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyCXhS6UQmMankVvgU3hQe3JCy-Cvqfn0oc",
  authDomain: "intellewingassignment.firebaseapp.com",
  projectId: "intellewingassignment",
  storageBucket: "intellewingassignment.appspot.com",
  messagingSenderId: "602706698798",
  appId: "1:602706698798:web:333f0ffe452553346bb5bf"
};

const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
