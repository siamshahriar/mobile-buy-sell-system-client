import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [userInfo, isAdminLoading] = useAdmin(user?.email);

  // const location = useLocation();
  // state={{ from: location }}

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && userInfo[0].role === "admin") {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default AdminRoute;
