import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Items from "../../Pages/CategoryItems/Items/Items";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

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
        element: <Items></Items>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category}`),
      },
    ],
  },
]);

export default router;
