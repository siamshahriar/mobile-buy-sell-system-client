import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Sales Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((myProduct, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{myProduct.productName}</td>
                <td>{myProduct.price} Taka</td>
                <td>{myProduct.sold ? "Sold" : "Unsold"}</td>
                <td>
                  {myProduct.advertised ? "Advertising" : "Make Advertise"}
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
