import React, { useContext, useState } from "react";
import { AuthContext } from "../../../src/pages/Providers/Authprovider";
import Swal from "sweetalert2";

const Card = ({product,products,setProducts}) => {
  
  const {_id,title,price,img}=product;
 
  const deleteProduct=()=>{
    fetch(`https://panda-commerce-server.onrender.com/products/${_id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount){
        Swal.fire("Produuct Deleted");
        const newProducts=products.filter(x=>x._id!=_id);
        setProducts(newProducts);
      }
    })
  }

 
  return (
   
    <div>
      <div className="card w-full h-[400px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
          <img
            src={img}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="card-actions flex justify-between">
            <h3 className="text-xl font-semibold">{price}</h3>
            <h3 className="text-xl font-semibold bg-yellow-300 p-1 rounded">15%</h3>
          </div>
          <button onClick={deleteProduct} className="btn btn-primary">Delete</button>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
