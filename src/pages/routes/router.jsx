import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Login from "../LogIn/LogIn";
import ProductLayout from "../layout/ProductLayout";
import Home from "../Home/Home";

import AddProduct from "../AddProduct/AddProduct";
import OrderLayout from "../layout/OrderLayout";
import All from "../All/All";
import PromotionLayout from "../layout/PromotionLayout";
import NewPromotion from "../../NewPromotion/NewPromotion";
import Allpromotion from "../AllPromotion/Allpromotion";
import EditPromotion from "../../EditPromotion/EditPromotion";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },

  {
    path: "/products",
    element: <PrivateRouter><ProductLayout></ProductLayout></PrivateRouter>,
    children: [
      {
        path: "/products",
        element: <Home></Home>,
      },
      {
        path: "/products/new",
        element: <AddProduct></AddProduct>,
      },
    ],
  },
  {
    path: "/orders",
    element: <PrivateRouter><OrderLayout></OrderLayout></PrivateRouter>,
    children: [
      {
        path: "/orders",
        element: <All></All>,
        loader: () => fetch(`http://127.0.0.1:3000/orders?category=all`),
      },
      {
        path: "/orders/pending",
        element: <All></All>,
        loader: () => fetch(`http://127.0.0.1:3000/orders?category=pending`),
      },
      {
        path: "/orders/cancelled",
        element: <All></All>,
        loader: () => fetch(`http://127.0.0.1:3000/orders?category=cancelled`),
      },
      {
        path: "/orders/confirmed",
        element: <All></All>,
        loader: () => fetch(`http://127.0.0.1:3000/orders?category=confirmed`),
      },
    ],
  },
  {
    path: "/promotions",
    element: <PrivateRouter><PromotionLayout></PromotionLayout></PrivateRouter>,
    children: [
      {
        path: "/promotions/newPromotion",
        element: <NewPromotion></NewPromotion>,
      },
      {
        path: "/promotions/allPromotion",
        element: <Allpromotion></Allpromotion>,
      },
      {
        path: "/promotions/editPromotion",
        element: <EditPromotion></EditPromotion>,
        loader:({params})=>fetch(`http://127.0.0.1:3000/promotions/${params.id}`)
      }
    ],
  },
]);
export default router;
