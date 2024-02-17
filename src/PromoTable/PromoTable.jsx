import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PromoTable = ({ promotion }) => {
  const { _id, indx, promo, start, end, use, active, rate } = promotion;
  const [tempStatus, setTempStatus] = useState(active);
  
  const activePromo = () => {
    fetch(`http://127.0.0.1:3000/promotions/${_id}`, {
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
    fetch(`http://127.0.0.1:3000/promotions/${_id}`, {
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
      <td>{start}</td>
      <td>{end}</td>
      <td>{use}</td>
      <td>{rate}</td>

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
