import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider, createBrowserRouter,  } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path:"",
        element: <Home/> 
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"login",
        element: <Login/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
