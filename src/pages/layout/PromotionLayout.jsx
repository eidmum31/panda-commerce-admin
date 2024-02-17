import React from "react";
import Header from "../Shared/Header/Header";
import Drawer from "../Drawer/Drawer";
import { Outlet } from "react-router-dom";
import Promo from "../Promo/Promo";

const PromotionLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-3/12">
            <Drawer></Drawer>
          </div>
          <div className="lg:w-9/12">
            <Promo></Promo>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionLayout;
