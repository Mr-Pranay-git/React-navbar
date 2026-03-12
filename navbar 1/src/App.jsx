import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App