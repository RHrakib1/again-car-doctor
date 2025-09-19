import React, { useContext } from 'react'
import { AuthContext } from '../../Authentication/AuthProvider/Authprovider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const { userdata, loadding, } = useContext(AuthContext)
  const location = useLocation()
  console.log(location.pathname, 'this is location nam e')
  if (loadding) {
    return <span className="loading loading-spinner loading-xl"></span>
  }

  if (userdata?.email) {
    return children;

  }
  return <Navigate to='/login' state={location.pathname} replace></Navigate>

}
