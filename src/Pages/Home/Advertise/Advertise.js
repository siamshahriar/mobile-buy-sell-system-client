import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import EachItem from "../../CategoryItems/EachItem/EachItem";
import BookingModal from "../BookingModal/BookingModal";

const Advertise = () => {
  const [products, setProducts] = useState([]);
  const [productItem, setProductItem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/advertisements")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // console.log("advertige");

  // const {
  //   data: products = [],
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["users"],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/advertisements");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2 className="text-3xl font-semibold text-center my-8">
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
