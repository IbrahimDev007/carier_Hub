import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import customLoader from './Loder/loader';
import JobDesc from './Component/Job/JobDesc';
import AppliedJob from './Component/Job/AppliedJob';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
      path: "/",
      element:<Home/>,
      loader:customLoader,
    },
      {
      path: "/desc",
      element:<JobDesc/>,
      loader:customLoader,
    },
  
      {
      path: "/appliedJob",
      element:<AppliedJob/>,
      loader:customLoader,
    },
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
