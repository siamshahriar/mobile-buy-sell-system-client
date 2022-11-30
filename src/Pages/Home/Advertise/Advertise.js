import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import EachItem from "../../CategoryItems/EachItem/EachItem";
import BookingModal from "../BookingModal/BookingModal";

const Advertise = () => {
  const [products, setProducts] = useState([]);
  const [productItem, setProductItem] = useState(null);

  useEffect(() => {
    fetch("https://mobile-buy-sell-system-server.vercel.app/advertisements")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  if (!products) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <>
      <h2 className="text-4xl font-semibold font-mono text-center my-8 lg:mt-14">
        Adverstisements
      </h2>
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

export default Advertise;
