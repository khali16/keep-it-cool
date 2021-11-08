import React, { useEffect, useContext } from "react";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";

export const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const db = getFirestore();
  const auth = getAuth();

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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {});

    return unsubscribe;
  }, []);

  const value = {
    signUp,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
