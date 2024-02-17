import React from "react";
import Header from "../Shared/Header/Header";
import Drawer from "../Drawer/Drawer";
import Order from "../Order/Order";
import { Outlet } from "react-router-dom";

const OrderLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-3/12">
          <Drawer></Drawer>
        </div>
        <div className="lg:w-9/12">
          <Order></Order>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default OrderLayout;
