import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import imge from "../../assets/imgs/login.jpg";
import * as yup from "yup";
import axios from "axios";
import { Formik, useFormik } from "formik";

export default function LogIn() {
  const [loadingdData, setloadingdData] = useState(false);

  let navv = useNavigate();

  // 01-Validation (using yup and you can make validation without yup also)
  let validationSchema = yup.object({
    email: yup.string().required("email is Required").email("email is invaild"),

    password: yup
      .string()
      .required("Password is Required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password is inccorect"),
  });

  // Submit Data ya prince
  async function submitData(values) {
    setloadingdData(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );
      console.log(data);
      if (data.message === "success") {
        setloadingdData(false);
        localStorage.setItem("userToken", data.token);
        navv("/home");
      }
    } catch (error) {
      console.log("error", error);
    }
  }

  // 02-Make Form
  let formik = useFormik({
    // de el tagme3a
    // form Values
    initialValues: {
      email: "",
      password: "",
    },
    // validation
    validationSchema,
    // on submit Function
    onSubmit: submitData,
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className=" row container-fluid  ">
          <div className="leftt col-md-6 mx-5 ">
            <img
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              src={imge}
              alt=""
            />
          </div>
          <div className="rigtht col-md-4 my-5">
            <h3>Welcome Back </h3>
            <h6>
              Thanks for returning, please Sgin in ti access yout Account{" "}
            </h6>
            <input
              type="text"
              placeholder="Email"
              className=" my-3 form-control"
              id="email"
              name="email"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger"> {formik.errors.email} </div>
            ) : null}

            <input
              type="text"
              placeholder="Password"
              className="my-3 form-control"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger">
                {" "}
                {formik.errors.password}{" "}
              </div>
            ) : null}

            {loadingdData ? (
              <button
                className=" my-3 btn btn-outline-danger w-100"
                type="button"
              >
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                className=" my-3 btn btn-outline-dark w-100"
                type="submit"
              >
                Login{" "}
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
