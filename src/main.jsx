import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Component/Root';
import Home from './Pages/Home/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthProvider from './Component/Providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import Error from './Pages/Error';

// Import the ToastContainer and its CSS
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Component/Product/AddTask';
// import Products from './Component/Product/ProductsByBrand';

import UpdateProduct from './Component/Product/UpdateTask';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddTask from './Component/Product/AddTask';
import List from './Component/Product/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/add-product",
        element: <PrivateRoutes><AddTask></AddTask></PrivateRoutes>,

      },
      {
        path: "/update-product/:id",
        element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes>,
        loader: ({params})=>fetch(`http://localhost:5000/task/${params.id}`)
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path: 'add-task',
        element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path: 'do-list',
        element: <PrivateRoutes><List></List></PrivateRoutes>
      },
    ]
    }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
