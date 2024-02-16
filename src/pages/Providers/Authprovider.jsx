import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";
export const AuthContext = createContext({});
import {
  getAuth,
  
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const Authprovider = ({ children }) => {
    
    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(null);
    
    
    
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const AuthInfo = {
      logOut,
      user,
      loginUser,
      loading,
    };
    return (
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default Authprovider;