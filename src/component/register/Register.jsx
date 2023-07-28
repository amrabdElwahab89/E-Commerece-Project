import React, { useState } from "react";
import img from "../../assets/imgs/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function Register() {
  let navvv = useNavigate();
  const [loadingData, setloadingData] = useState(false);

  // 01-Validation (using yup and you can make validation without yup also)
  let validationSchema = yup.object({
    name: yup
      .string()
      .required("first Name is Required")
      .min(3, "name min Length is 3")
      .max(10, "name max length is 30"),

    email: yup.string().required("email is Required").email("email is invaild"),

    password: yup
      .string()
      .required("Password is Required")
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password is inccorect"),

    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),

    phone: yup.string().required("Phone is Required"),
  });

  async function submitData(values) {
    setloadingData(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );
      if (data.message === "success") {
        setloadingData(false);
        navvv("/login");
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
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    // validation
    validationSchema,
    // on submit Function
    onSubmit: submitData,
  });

  return (
    <>
      {/* {formik.handlesubmit 3lshan elreload bta3 el form w dah 3ab el form} */}
      <form onSubmit={formik.handleSubmit}>
        <div className="container-fluid row bg-light">
          <div className="leftt col-md-6 ">
            <img className="w-100 h-100" src={img} alt="" />
          </div>
          <div className="rightt  col-md-4 my-5">
            <h2>Create an Account</h2>
            <h6>Lets get Started for free</h6>

            {/* kol input leha type ,placehoder ,classname ,name , value , onchange , onlur and lama ykon fe error y7sal eh */}
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control mt-4"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="alert alert-danger"> {formik.errors.name} </div>
            ) : null}

            <input
              type="text"
              placeholder="Email"
              className="form-control mt-4"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="alert alert-danger"> {formik.errors.email} </div>
            ) : null}

            <input
              type="text"
              placeholder="Enter Your Password"
              className="form-control mt-4"
              name="password"
              id="password"
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

            <input
              type="text"
              placeholder="rePassword"
              className="form-control mt-4"
              name="rePassword"
              id="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.rePassword && formik.touched.rePassword ? (
              <div className="alert alert-danger">
                {" "}
                {formik.errors.rePassword}{" "}
              </div>
            ) : null}

            <input
              type="text"
              placeholder="Enter Your Phone"
              className="form-control mt-4"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <div className="alert alert-danger"> {formik.errors.phone} </div>
            ) : null}

            {/* elbutton el awl alzam a3mlo submit and el disabled de 7efz m3lsh*/}

            {loadingData ? (
              <button
                disabled={!(formik.dirty && formik.isValid)}
                type="button"
                className="btn btn-outline-danger mt-3"
              >
                <i className="fas fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                disabled={!(formik.dirty && formik.isValid)}
                type="submit"
                className="btn btn-outline-info mt-3"
              >
                Create Account
              </button>
            )}

            <h6 className="mt-5">
              Already Have an Account ? <Link to="/login"> Sgin In</Link>
            </h6>
          </div>
        </div>
      </form>
    </>
  );
}
