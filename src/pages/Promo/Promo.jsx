import React from "react";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
    <div>
      <div className="lg:grid-cols-4 grid-cols-1 ms-5">
        <Link to={"/promotions/newPromotion"}>
          <button className="btn  mt-4  me-4">ADD Promo Codes</button>
        </Link>
        <Link to={"/promotions/allPromotion"} className="">
          <button className="btn  mt-4  me-4">View Promo Codes</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Promo;
