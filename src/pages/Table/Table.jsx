import React, { useState } from "react";
import Swal from "sweetalert2";

const Table = ({ order, indx }) => {
  const { _id, price, status } = order;
  const [tempStatus, setTempStatus] = useState(status);
  const confirmOrder = () => {
    fetch(`http://127.0.0.1:3000/orders/${_id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Order Confirmed");
          setTempStatus("confirmed");
        } else {
          Swal.fire("Order can not Confirm");
        }
      });
  };
  const cancelOrder = () => {
    fetch(`http://127.0.0.1:3000/orders/${_id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "cancelled" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire("Order cancelled");
          setTempStatus("cancelled");
        } else {
          Swal.fire("Order can not cancel");
        }
      });
  };
  return (
    <tr>
      <th>{indx}</th>
      <td>{_id}</td>
      <td>{price}</td>
      <td>
        {tempStatus === "pending" ? (
          <>
            <button onClick={confirmOrder} className="btn btn-primary me-2">
              Confirm
            </button>
            <button onClick={cancelOrder} className="btn btn-error">
              Cancel
            </button>
          </>
        ) : (
          ""
        )}
      </td>
      <td>{tempStatus}</td>
    </tr>
  );
};

export default Table;
