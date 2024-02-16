import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";

import Login from "../LogIn/LogIn";
import ProductLayout from "../layout/ProductLayout";
import Home from "../Home/Home";

import AddProduct from "../AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },

  {
    path:"/products",
    element:<ProductLayout></ProductLayout>,
    children:[
        {
            path:'/products',
            element:<Home></Home>
        }
        ,
        {
            path:'/products/new',
            element:<AddProduct></AddProduct>
        }
    ]
  }
]);
export default router;