import React from "react";
import Swal from "sweetalert2";

const NewPromotion = () => {
  const addPromo = (e) => {
    e.preventDefault();
    const form = e.target;
    const promo = form.promo.value.toUpperCase();
    const start = form.start.value;
    const end = form.end.value;
    const rate = form.rate.value;
    const use = form.use.value;
    const active = form.active.checked;
    const data = {
      promo,
      start,
      end,
      rate,
      use,
      active,
    };
    console.log(data);
    fetch(`https://panda-commerce-server.onrender.com/promotions`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your product added successfully!",
            icon: "success",
          });
        }

      });
  };
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[60px]">
      <h1 className="text-center text-3xl pt-4 font-semibold">
        Product details
      </h1>
      <form onSubmit={addPromo} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Promo Code</span>
          </label>
          <input
            type="text"
            placeholder="Enter Promo Code"
            className="input input-bordered"
            name="promo"
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
            required
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Active</span>
            <input type="checkbox" className="toggle" name="active" />
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">ADD Promo</button>
        </div>
      </form>
    </div>
  );
};

export default NewPromotion;
