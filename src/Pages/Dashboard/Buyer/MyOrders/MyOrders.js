import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/booking/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(bookings);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking.productName}</td>
                <td>{booking.price} Taka</td>
                <td>{booking.paidStatus ? "Paid" : "Make Payment"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
