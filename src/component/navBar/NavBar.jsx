import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo only */}
          <Link className="navbar-brand " to="/home">
            Navbar
          </Link>

          {/* left Section after logo */}
          <div
            className=" ms-5 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="brands">
                  Brands
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="cart">
                  Cart
                </Link>
              </li>
              <li className="nav-item dropdown"></li>
            </ul>

            <form className="form-inline my-2 my-lg-0 d-flex">
              <input
                className="form-control m-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-5 my-sm-0 "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Section  */}
          <div
            className="collapse navbar-collapse d-flex justify-content-end "
            id="navbarSupportedContentt"
          >
            <ul className="navbar-nav me-5">
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
    </>
  );
}
