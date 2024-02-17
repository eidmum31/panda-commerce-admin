import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("https://panda-commerce-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div
      style={{ margin: "0 auto" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto"
    >
      {products.map((product) => (
        <Card
          products={products}
          setProducts={setProducts}
          product={product}
          key={product._id}
        ></Card>
      ))}
    </div>
  );
};

export default Home;
