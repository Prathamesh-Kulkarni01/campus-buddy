import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import  firebase from "firebase/compat/app";
import {onAuthStateChanged} from 'firebase/compat/auth'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/compat/auth";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
    .then((payload)=>{
      

      console.log(payload);
  }).catch((err)=>{
  
    console.log(err);
  })
  }
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword( email, password)
    .then((payload)=>{
      

      console.log(payload);
  }).catch((err)=>{
  
    console.log(err);
  })
  }
  function logOut() {
    auth.signOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  async function googleSignIn() {
    const provider =await new  firebase.auth.GoogleAuthProvider()
    

    

    return await auth.signInWithPopup(provider)
    .then((payload)=>{
      





        console.log(payload);
    }).catch((err)=>{
      console.log(err);



    })
    
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
