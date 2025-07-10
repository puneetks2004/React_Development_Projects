import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from "./component/home.jsx"
import About from "./component/about.jsx"
import Layout from './component/layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',//slash is already present after that what
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",//note / is already present after that about
        element: <About />//element i want to render
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
