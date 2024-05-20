import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };



  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name , photoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser);
      setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
},[]);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userInfo = { user, loading, createUser, signInUser, logOut ,updateUserProfile };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
