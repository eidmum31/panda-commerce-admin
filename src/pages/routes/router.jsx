import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  
} from "react-router-dom";

import Login from "../LogIn/LogIn";
import ProductLayout from "../layout/ProductLayout";
import Home from "../Home/Home";
import Test from "../Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path:'/test',
    element:<Test></Test>
  },
  {
    path:"/products",
    element:<ProductLayout></ProductLayout>,
    children:[
        {
            path:'/products',
            element:<Home></Home>
        }
    ]
  }
]);
export default router;