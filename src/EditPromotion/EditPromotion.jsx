import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditPromotion = ({promotion}) => {
  const data=useLoaderData();
  const {_id,promo,start,end,rate,use,active}=data;
  const editPromo=(e)=>{
    e.preventDefault();
    const form = e.target;
    const promo = form.promo.value.toUpperCase();
    const start = form.start.value;
    const end = form.end.value;
    const rate = form.rate.value;
    const use = form.use.value;
    const data = {
      promo,
      start,
      end,
      rate,
      use
      
    };
    fetch(`http://127.0.0.1:3000/promotions/${_id}`, {
      method: "PATCH", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.modifiedCount) {
            Swal.fire("Promo Edited");
            
          } else {
            Swal.fire("Promo can not Edited");
          }
    })
  }
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[60px]">
      <h1 className="text-center text-3xl pt-4 font-semibold">
        Product details
      </h1>
      <form onSubmit={editPromo} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Promo Code</span>
          </label>
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="input input-bordered"
            name="promo"
            defaultValue={promo}
            disabled
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Start Date</span>
          </label>
          <input
            type="date"
            placeholder="Pick Start Date"
            className="input input-bordered"
            name="start"
            defaultValue={start}
            disabled
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">End Date</span>
          </label>
          <input
            type="date"
            placeholder="Pick End Date"
            className="input input-bordered"
            name="end"
            defaultValue={end}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount Rate</span>
          </label>
          <input
            type="text"
            placeholder="Enter Discount Rate"
            className="input input-bordered"
            name="rate"
            defaultValue={rate}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Use Time</span>
          </label>
          <input
            type="text"
            placeholder="Enter Use Time"
            className="input input-bordered"
            name="use"
            defaultValue={use}
            required
          />
        </div>
       

        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit Promo</button>
        </div>
      </form>
    </div>
  );
};

export default EditPromotion;
