import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const [postReviewChange, setpostReviewChnage] = useState({});
  useEffect(() => {
    axios
      .get("https://mobile-buy-sell-system-server.vercel.app/lists/seller")
      .then((res) => setSellers(res.data));
  }, [postReviewChange]);

  //deleting user
  const handleDeleteSeller = (seller) => {
    const confirmDelete = window.confirm(`Delete ${seller.name} ??`);
    if (!confirmDelete) {
      toast.error("Deletion process canceled by Admin");
      return;
    }
    fetch(
      `https://mobile-buy-sell-system-server.vercel.app/users/${seller._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setpostReviewChnage(Math.floor(Math.random() * 10));
          toast.success(`Seller ${seller.name} deleted successfully`);
        }
      });
  };

  //deleting user
  const handleVerifySeller = (seller) => {
    const confirmVerify = window.confirm(`Verify ${seller.name} ??`);
    if (!confirmVerify) {
      toast.error("Verification process canceled by Admin");
      return;
    }
    fetch(
      `https://mobile-buy-sell-system-server.vercel.app/sellers/${seller._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setpostReviewChnage(Math.floor(Math.random() * 100));
          toast.success("Verfication done Successfully");
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Verfify Status</th>
              <th>Make Verfify</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>
                <td>
                  {seller?.sellerVerified ? (
                    <button className="btn btn-warning">Yes</button>
                  ) : (
                    <button className="btn btn-warning">No</button>
                  )}
                </td>
                <td>
                  {seller?.sellerVerified ? (
                    <button className="btn btn-primary btn-disabled">
                      Verified
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerifySeller(seller)}
                      className="btn btn-secondary"
                    >
                      Make Verify
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteSeller(seller)}
                    className="btn btn-warning"
                  >
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

export default AllSellers;
