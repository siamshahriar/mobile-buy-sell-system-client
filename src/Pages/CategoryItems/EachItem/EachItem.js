import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

const EachItem = ({ product, setProductItem }) => {
  const {
    _id,
    img,
    productName,
    location,
    resalePrice,
    orginalPrice,
    yearsOfuse,
    time,
    description,
    phoneNumber,
    condition,
    sellerMail,
  } = product;

  const {
    data: sellerInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${sellerMail}`);
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    fetch(`http://localhost:5000/users/${sellerMail}`)
      .then((res) => res.json)
      .then((data) => {});
  }, [sellerMail]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  //Report product
  const handleReportProduct = (product) => {
    const confirmReport = window.confirm(`Report ${product.productName} ??`);
    if (!confirmReport) {
      toast.error("Report process canceled by seller");
      return;
    }
    fetch(`http://localhost:5000/report/${product._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reported: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Report done Successfully");
        }
      });
  };

  const { name, sellerVerified } = sellerInfo[0];

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          style={{ height: "300px", objectFit: "cover" }}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{productName}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <p>Location: {location}</p>
        <p>Orginal Price: {orginalPrice}</p>
        <p>Resale Price: {resalePrice}</p>
        <p>Years of Use: {yearsOfuse}</p>
        <p>Time of Post{time}</p>
        <p>About: {description}</p>
        <p>Condition: {condition}</p>
        <p>Contact: {phoneNumber}</p>
        <p>Seller Name: {name}</p>
        <p>
          Verfication Status :
          {sellerVerified ? (
            <FaCheckCircle className="inline ml-4 bg-blue-600 rounded-full h-5 w-5"></FaCheckCircle>
          ) : (
            <FaTimes className="inline ml-4 bg-red-600 rounded-full h-5 w-5"></FaTimes>
          )}
        </p>
        <div className="card-actions">
          <label
            htmlFor="bookingModal"
            onClick={() => setProductItem(product)}
            className="btn btn-primary"
          >
            Book Now
          </label>
        </div>
        <button
          onClick={() => handleReportProduct(product)}
          className="btn btn-warning"
        >
          Report to admin
        </button>
      </div>
    </div>
  );
};

export default EachItem;
