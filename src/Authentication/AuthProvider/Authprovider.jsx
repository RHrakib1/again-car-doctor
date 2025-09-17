import React, { createContext, useState } from 'react'


export const AuthContext = createContext({ children })
export default function Authprovider() {
    const [userdata, setuserdata] = useState(null)

    const info = {
        userdata
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
