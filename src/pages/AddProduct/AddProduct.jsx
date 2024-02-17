import axios from "axios";
import React, { useState } from "react";
import Resizer from "react-image-file-resizer";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });
  const handleImageChang = async (e) => {
    try {
      const file = e.target.files[0];
      const image = await resizeFile(file);
      setImageFile(image);
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  };
  const addProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const beforePrice = form.price.value;
    const rate = form.rate.value;
    const charge = form.charge.value;
    const color = form.color.value;
    const size = form.size.value;

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=365c9a7650645f5a50934f48e19ecc3e",
        formData
      );
      const uploadedImageUrl = response.data.data.url;

      console.log("Image uploaded successfully. URL:", uploadedImageUrl);
      const data = {
        img: uploadedImageUrl,
        title: name,
        orginalPrice: beforePrice,
        rate,
        charge,
        color,
        size,
        price: beforePrice - parseFloat(beforePrice) * (parseFloat(rate) / 100),
      };
      console.log(data);
      fetch(`http://127.0.0.1:3000/products`, {
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
    } catch (error) {
      Swal.fire({
        title: "error!",
        text: "Product add failed!",
        icon: "error",
      });
    }
  };
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-[60px]">
      <h1 className="text-center text-3xl pt-4 font-semibold">
        Product details
      </h1>
      <form onSubmit={addProduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            placeholder="Upload a image"
            className="file-input file-input-bordered w-full max-w-xs"
            name="image"
            onChange={handleImageChang}
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

        <div className="form-control mt-6">
          <button className="btn btn-primary">ADD Product</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
