import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [postReviewChange, setpostReviewChnage] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/lists/reports")
      .then((res) => setReports(res.data));
  }, [postReviewChange]);

  //deleting user
  const handleDeleteProduct = (report) => {
    const confirmDelete = window.confirm(`Delete ${report.productName} ??`);
    if (!confirmDelete) {
      toast.error("Deletion process canceled by Admin");
      return;
    }
    fetch(`http://localhost:5000/products/${report._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setpostReviewChnage(Math.floor(Math.random() * 10));
          toast.success(
            `Reported Product ${report.productName} deleted successfully`
          );
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={report?.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{report?.productName}</td>
                <td>{report?.categoryName}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(report)}
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

export default Reports;
