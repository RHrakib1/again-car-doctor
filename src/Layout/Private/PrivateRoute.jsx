import React, { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthProvider/Authprovider'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { userdata, loadding, } = useContext(AuthContext)

    if (loadding) {
      return  <span className="loading loading-spinner loading-xl"></span>
    }

    if (userdata?.email) {
        return children;

    }
    return <Navigate to='/login' replace></Navigate>

}
