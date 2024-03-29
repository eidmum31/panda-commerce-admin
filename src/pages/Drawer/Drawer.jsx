import React from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="drawer  lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden w-full my-3"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content underline text-xl font-semibold gap-y-3">
          {/* Sidebar content here */}
          <Link to={"/promotions"}>Promotions</Link>
          <Link to={'/orders'}>Orders</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/products/new'}>Add New Product</Link>

        </ul>
      </div>
    </div>
  );
};

export default Drawer;
