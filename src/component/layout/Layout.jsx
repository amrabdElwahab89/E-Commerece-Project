import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="container-fluid my-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
