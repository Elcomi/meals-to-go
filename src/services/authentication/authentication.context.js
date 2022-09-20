import React, { createContext, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const reactNativeFirebaseConfig = {
  apiKey: "AIzaSyDJCzBTBQ2xP4MHqCJgjOr-qJrL_kTwVLw",
  authDomain: "mealstogo-cad1e.firebaseapp.com",
  projectId: "mealstogo-cad1e",
  storageBucket: "mealstogo-cad1e.appspot.com",
  messagingSenderId: "593281447645",
  appId: "1:593281447645:web:2782ccc6d0ffcbe3820d34",
  measurementId: "G-TNY0HDLNDM"
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(reactNativeFirebaseConfig);
}

const auth = firebase.auth();

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  console.log("AuthenticationContextProvider -> user", user);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  auth.onAuthStateChanged(user => {
    if (user) {
      setIsLoading(false);
      setUser(user);
      setIsAuth(true);
    }
  });

  const Register = (email, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setError("ُError: password & repeat-Password not the same");
      return null;
    }
    setIsLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)

      .then(User => {
        setIsLoading(false);
        setUser(User);
        setIsAuth(true);
      })
      .catch(error => {
        setError(error.toString());
      });
  };

  const Login = (email, password) => {
    setIsLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(User => {
        setIsLoading(false);
        setUser(User);
        setIsAuth(true);
      })
      .catch(error => {
        setError(error.toString());
      });
  };

  const Logout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
        setIsAuth(false);
      })
      .catch(error => {
        setError(error.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        isAuth, //  (isAuth = true) if (user = value)
        Login,
        Register,
        Logout
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
