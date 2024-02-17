import React, { useEffect, useState } from "react";
import PromoTable from "../../PromoTable/PromoTable";

const Allpromotion = () => {
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/promotions")
      .then((res) => res.json())
      .then((data) => setPromotions(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
              <th>Discount Rate</th>
              <th>Coupon Limit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion, indx) => (
              <PromoTable indx={indx} promotion={promotion} key={promotion._id}></PromoTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allpromotion;
