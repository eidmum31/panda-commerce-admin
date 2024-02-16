import React from "react";

const AddProduct = () => {
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[60px]">
      <h1 className="text-center text-3xl pt-4 font-semibold">
        Product details
      </h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Image Url</span>
          </label>
          <input
            type="text"
            placeholder="Image Url"
            className="input input-bordered"
            name="image"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price(Before Discount)</span>
          </label>
          <input
            type="text"
            placeholder="Enter Product Price(Orginal)"
            className="input input-bordered"
            name="price"
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
            <span className="label-text">Shipping Charge</span>
          </label>
          <input
            type="text"
            placeholder="Enter Shipping Charge"
            className="input input-bordered"
            name="charge"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Color</span>
          </label>
          <input
            type="text"
            placeholder="Enter Color"
            className="input input-bordered"
            name="color"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <input
            type="text"
            placeholder="Enter Size"
            className="input input-bordered"
            name="size"
            required
          />
        </div>

        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Active</span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">ADD Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
