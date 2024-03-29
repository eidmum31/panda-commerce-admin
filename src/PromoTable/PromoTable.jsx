import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PromoTable = ({ promotion ,indx}) => {
  const { _id,  promo, start, end, use, active, rate} = promotion;
  const [tempStatus, setTempStatus] = useState(active);
  console.log(indx);
  const activePromo = () => {
    fetch(`https://panda-commerce-server.onrender.com/promotions/${_id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ active: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Promo Activated");
          setTempStatus(true);
        } else {
          Swal.fire("Promo can not Activated");
        }
      });
  };
  const deactivePromo = () => {
    fetch(`https://panda-commerce-server.onrender.com/promotions/${_id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ active: false }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Promo Deactivated");
          setTempStatus(false);
        } else {
          Swal.fire("Promo can not Deactivated");
        }
      });
  };
  
  return (
    <tr>
      <th>{indx}</th>
      <th>{promo}</th>
      <td>{start}</td>
      <td>{end}</td>
      
      <td>{rate}</td>
      <td>{use}</td>

      <td>
        <Link to={`/promotions/${_id}`}><button className="btn btn-primary me-2">Edit</button></Link>
        {tempStatus ? (
          <>
            <button onClick={deactivePromo} className="btn btn-error me-2">
              Deactive
            </button>
          </>
        ) : (
          <button onClick={activePromo} className="btn btn-primary">
            Active
          </button>
        )}
      </td>
      <td>{tempStatus}</td>
    </tr>
  );
};

export default PromoTable;
