import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup, 
  FacebookAuthProvider,
  TwitterAuthProvider 

} from 'firebase/auth';
import { auth } from '../config/firebase-config';

const UserContext = createContext<any | undefined>(undefined);

UserContext.displayName = "AuthContext";

// consumer logic
export const useAuth = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export const AuthContextProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [checkingAuthState, setCheckingAuthState] = useState(true)

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
  };

  const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logout = () => {
      return signOut(auth)
  }
  const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
    setCheckingAuthState(false)
  });

  useEffect(() => {
      unsubscribe();
  }, []);

  const value ={
    createUser, 
    user, 
    checkingAuthState,
    logout, 
    signIn,
    signInWithGoogle, 
    signInWithFacebook, 
    signInWithTwitter
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};