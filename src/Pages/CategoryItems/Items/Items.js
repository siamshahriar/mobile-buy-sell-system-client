import React from "react";
import { useLoaderData } from "react-router-dom";
import EachItem from "../EachItem/EachItem";

const Items = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
      {products.map((product) => (
        <EachItem key={product._id} product={product}></EachItem>
      ))}
    </div>
  );
};

export default Items;
