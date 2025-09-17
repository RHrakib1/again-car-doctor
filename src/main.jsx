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
        element: <Services></Services>
      },
    ]
  },
]);





createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  </div>
)
