import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Home/BookingModal/BookingModal";
import EachItem from "../EachItem/EachItem";

const Items = () => {
  const products = useLoaderData();
  const [productItem, setProductItem] = useState(null);
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold font-mono text-center ">
          {products[0].categoryName} Category
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {products.map((product) => (
          <EachItem
            key={product._id}
            setProductItem={setProductItem}
            product={product}
          ></EachItem>
        ))}
      </div>
      {productItem && (
        <BookingModal
          productItem={productItem}
          setProductItem={setProductItem}
        ></BookingModal>
      )}
    </>
  );
};

export default Items;
