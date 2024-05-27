import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UserLayout from "../Layouts/UserLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import DashboardHome from "../Pages/UserPages/DashboardHome";
import SingleProduct from "../Pages/SingleProduct";
import AllProducts from "../Pages/UserPages/AllProducts";
import AddProduct from "../Pages/UserPages/AddProduct";
import UpdateProduct from "../Pages/UserPages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/products"),
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>  fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <UserLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "allProducts/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>   fetch(`http://localhost:3000/products/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
