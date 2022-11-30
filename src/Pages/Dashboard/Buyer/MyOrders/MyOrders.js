import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
      const res = await fetch(
        `https://mobile-buy-sell-system-server.vercel.app/booking/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  //   console.log(bookings);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
              <th>Make Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={booking?.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{booking?.productName}</td>
                <td>{booking?.price} Taka</td>
                <td>
                  {booking?.paidStatus ? (
                    <button className="btn btn-success">Paid</button>
                  ) : (
                    <button className="btn btn-warning">Not Paid</button>
                  )}
                </td>
                <td>
                  {booking?.paidStatus ? (
                    <button className="btn btn-primary btn-disabled">
                      Done Payment
                    </button>
                  ) : (
                    <Link
                      className="btn btn-warning"
                      to={`/dashboard/payment/${booking._id}`}
                    >
                      Make Payment
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
