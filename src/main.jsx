import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'
import Error from './components/error/Error'
import Donation from './components/donation/Donation'
import Statistics from './components/statistics/Statistics'
import Home from './components/Home/Home'
import Details from './components/details/Details'

const router =createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/donation',
        element:<Donation></Donation>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:()=>fetch('../categories.json'),
      },
      {
        path:'/details/:id',
        loader:()=>fetch('../categories.json'),
        element:<Details></Details>,
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router= {router}></RouterProvider>
  </React.StrictMode>,
)
