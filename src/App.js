import React from 'react'
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Homepage from './screens/Home/Homepage.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App