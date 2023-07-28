import { Children, useState } from "react";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Home from "./component/home/home";
import Register from "./component/register/Register";
import Login from "./component/login/Login";
import Logout from "./component/logout/Logout";
import Layout from "./component/layout/Layout";
import Brands from "./component/brands/Brands";
import Search from "./component/search/Search";
import Cart from "./component/cart/Cart";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";

const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "search", element: <Search /> },
      {
        path: "brands",
        element: (
          <ProtectedRoute>
            <Brands />
          </ProtectedRoute>
        ),
      },
      { path: "logout", element: <Logout /> },
      { path: "login", element: <Login /> },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
