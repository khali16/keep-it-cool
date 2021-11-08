import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBc3jHyDBCjN1ZIhePIwxctLUtEu8_HuL8",
  authDomain: "keep-it-cool-74626.firebaseapp.com",
  projectId: "keep-it-cool-74626",
  storageBucket: "keep-it-cool-74626.appspot.com",
  messagingSenderId: "245787376748",
  appId: "1:245787376748:web:6b744fb9e7980b6e3cac49"
})

export const auth = getAuth(app);
export default app;