import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Services from './Component/Services/Services.jsx'
import Login from './Authentication/Login/Login.jsx'
import Register from './Authentication/Register/Register.jsx'
import Authprovider from './Authentication/AuthProvider/Authprovider.jsx'
import CheckOut from './Component/CheckOut/CheckOut.jsx'
import Booking from './Component/CheckOut/Booking.jsx'
import PrivateRoute from './Layout/Private/PrivateRoute.jsx'
import UpdateBooking from './Component/CheckOut/UpdateBooking.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <App></App>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      {
        path: '/updatebooking/:id',
        element: <UpdateBooking></UpdateBooking>,
        loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)

      }
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </StrictMode>,
  </div>
)
