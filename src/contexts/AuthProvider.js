import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from '.././firebase/firebase.config'

export const authContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubcribe();
    }, [])
    const authInfo = {
        createUser,
        singIn,
        logout,
        updateUser,
        user,
        loading
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;