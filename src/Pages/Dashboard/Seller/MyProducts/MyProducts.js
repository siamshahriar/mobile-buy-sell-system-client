import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
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

  //deleting product
  const handleDeleteProduct = (myProduct) => {
    const confirmDelete = window.confirm(`Delete ${myProduct.productName} ??`);
    if (!confirmDelete) {
      toast.error("Deletion process canceled by seller");
      return;
    }
    fetch(`http://localhost:5000/products/${myProduct._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(
            `Product ${myProduct.productName} deleted successfully`
          );
        }
      });
  };

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
                  <button onClick={() => handleDeleteProduct(myProduct)}>
                    Delete
                  </button>
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
