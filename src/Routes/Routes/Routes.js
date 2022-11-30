import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog/Blog";
import JVNODE from "../../Pages/Blog/JVNODE";
import JWT from "../../Pages/Blog/JWT";
import NodeMulti from "../../Pages/Blog/NodeMulti";
import SQL from "../../Pages/Blog/SQL";
import Items from "../../Pages/CategoryItems/Items/Items";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSeller/AllSellers";
import Reports from "../../Pages/Dashboard/Admin/Reports/Reports";
import MyOrders from "../../Pages/Dashboard/Buyer/MyOrders/MyOrders";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts/MyProducts";
import Error404 from "../../Pages/Error404/Error404";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/categories/:category",
        element: (
          <PrivateRoute>
            <Items></Items>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/state",
        element: <SQL></SQL>,
      },
      {
        path: "/blog/work",
        element: <JWT></JWT>,
      },
      {
        path: "/blog/unit",
        element: <JVNODE></JVNODE>,
      },
      {
        path: "/blog/vs",
        element: <NodeMulti></NodeMulti>,
      },
      {
        path: "/*",
        element: <Error404></Error404>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/orders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/myproducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reports",
        element: (
          <AdminRoute>
            <Reports></Reports>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/*",
        element: <Error404></Error404>,
      },
    ],
  },
]);

export default router;
