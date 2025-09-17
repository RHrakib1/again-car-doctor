import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../Provider/firebase.config';


export const AuthContext = createContext()
export default function Authprovider({ children }) {
    const [userdata, setuserdata] = useState(null)
    const [loadding, setloadding] = useState(true)

    const provider = new GoogleAuthProvider();
    const GoogleUser = () => {
        return signInWithPopup(auth, provider)
    }

    const usercreate = (email, password) => {
        setloadding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersignin = (email, password) => {
        setloadding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currentUser => {
            setuserdata(currentUser)
            setloadding(false)
            console.log(currentUser, 'this is a currentuser')
        });
        return () => {
            return unsubscrib();
        }
    }, [])

    const info = {
        userdata,
        GoogleUser,
        usercreate,
        usersignin,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
