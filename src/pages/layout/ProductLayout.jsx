import React from "react";
import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Drawer from "../Drawer/Drawer";

const ProductLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-2/12">
            <Drawer></Drawer>
        </div>
        <div className="lg:w-10/12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
