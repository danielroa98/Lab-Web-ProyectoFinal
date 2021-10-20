import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTV1wQDpqEzhRZFTCvyjXRzIyRUOI4GII",
  authDomain: "fir-webauthlab.firebaseapp.com",
  projectId: "fir-webauthlab",
  storageBucket: "fir-webauthlab.appspot.com",
  messagingSenderId: "477285145344",
  appId: "1:477285145344:web:f5173855e52d28f31cf1e5"
};



let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
