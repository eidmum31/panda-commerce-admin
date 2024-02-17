import React, { useEffect, useState } from "react";
import Table from "../Table/Table";
import { useLoaderData } from "react-router-dom";

const All = () => {
  const data=useLoaderData();
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    setOrders(data);
  },[data])
  


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Order Number</th>
              <th>Item Price</th>
              <th>Action</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order,indx)=><Table indx={indx}  order={order} key={order._id}></Table>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default All;
