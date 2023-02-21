import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const facebook_provider = new FacebookAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const registerUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () =>{
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const signInWithFacebook = () =>{
        signInWithPopup(auth, facebook_provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Logout Successfully');
            setUser(null);
        })
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    },[])

    const authInfo={
        registerUser,
        updateUser,
        logInUser,
        signInWithGoogle,
        signInWithFacebook,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;