import React, { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const usersignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

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
