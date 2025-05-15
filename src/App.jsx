import React from 'react'
import Home from './components/Home/Home'
import AllCars from './components/AllCars/AllCars'
import CarDetails from './components/CarDetails/CarDetails'
import Layout from './Layout'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'


function App() {
  let routes = createBrowserRouter([
    {
      path: "", element: <Layout />, children:
        [
          { index: true, element: <Home /> },
          { path: "all-vehicles", element: <AllCars /> },
          { path: "carDetails/:id", element: <CarDetails /> },
          { path: "*", element: <NotFound /> }
        ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
