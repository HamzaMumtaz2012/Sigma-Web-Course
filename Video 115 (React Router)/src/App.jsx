import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css"



function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><h1>Home</h1></>
    },
    {
      path: "/home",
      element: <><Navbar /><h1>Home</h1></>
    },
    {
      path: "/about",
      element: <><Navbar /><h1>About</h1></>
    },
    {
      path: "/contact",
      element: <><Navbar /><h1>Contact</h1></>
    }
  ])

  return <RouterProvider router={router} />
}

export default App
