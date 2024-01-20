import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import GlobalProvider from './Context/GlobalProvider.jsx';
import AllIcons from './Components/AllIcons/AllIcons.jsx';
import ShowIcons from './Components/ShowIcons/ShowIcons.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <AllIcons></AllIcons>,
      },
       {
        path: "/:id",
        element: <ShowIcons></ShowIcons>,
      }, 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
