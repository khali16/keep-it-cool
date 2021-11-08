import React, { useEffect, useContext } from "react";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import firebase from "firebase/compat/app";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const app = firebase.initializeApp({
  apiKey: "AIzaSyBc3jHyDBCjN1ZIhePIwxctLUtEu8_HuL8",
  authDomain: "keep-it-cool-74626.firebaseapp.com",
  projectId: "keep-it-cool-74626",
  storageBucket: "keep-it-cool-74626.appspot.com",
  messagingSenderId: "245787376748",
  appId: "1:245787376748:web:6b744fb9e7980b6e3cac49",
});

export function AuthProvider({ children }) {
  const db = getFirestore();
  const auth = getAuth(app);

  async function signUp(firstName, email, password) {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response.user.uid) {
      setDoc(doc(db, "users", "new-user"), {
        uid: response.user?.uid,
        email: email,
        firstName: firstName,
      });
    }
  }

  async function logIn(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {});

    return unsubscribe;
  }, [auth]);

  const value = {
    signUp,
    logIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
