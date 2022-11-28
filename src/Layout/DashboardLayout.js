import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { userInfo } = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">My Appointments</Link>
            </li>
            {userInfo.role === "admin" && (
              <>
                <li>
                  <Link to="/dashboard/allusers">All sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/adddoctor">All Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/managedoctors">Reported Items</Link>
                </li>
              </>
            )}
            {userInfo.role === "buyer" && (
              <>
                <li>
                  <Link to="/dashboard/allusers">My Orders</Link>
                </li>
              </>
            )}
            {userInfo.role === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/allusers">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers">My Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
