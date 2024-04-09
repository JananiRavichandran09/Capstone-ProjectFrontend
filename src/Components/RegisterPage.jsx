
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(
          "https://capstone-project-backend-j3mu.onrender.com/api/user/register",
          values
        )
        .then((result) => {
          alert("Registration successful!");
          if (result.data.Status === "success") {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Registration failed! Please try again.");
        });
    },
  });

  return (
    <div className="container-fluid ">
      <div className="text-center ">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "80px",
            marginTop: "80px",
          }}
        >
          <img
            src="https://etimg.etb2bimg.com/thumb/msid-105058534,width-1200,resizemode-4/.jpg"
            style={{ width: "320px", height: "350px" }}
          />
          <div>
            <h1
              style={{
                fontFamily: "Libre Caslon Text, serif",
                fontWeight: "700",
                fontStyle: "normal",
                color: "rgb(156, 83, 0)",
              }}
            >
              Register Here
            </h1>
            <ToastContainer />
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3 ">
                <label
                  htmlFor="inputuserName"
                  className="form-label"
                  style={{ marginRight: "215px", color: "blue" }}
                >
                  Username<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="inputuserName"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Username"
                  {...formik.getFieldProps("username")}
                  style={{ width: "300px" }}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div style={{ color: "red" }}>{formik.errors.username}</div>
                ) : null}

                <label
                  htmlFor="inputEmail"
                  className="form-label"
                  style={{ marginRight: "245px", color: "blue" }}
                >
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  placeholder="name@gmail.com"
                  {...formik.getFieldProps("email")}
                  style={{ width: "300px" }}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}

                <label
                  htmlFor="inputPassword"
                  className="form-label"
                  style={{ marginRight: "215px", color: "blue" }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  style={{ width: "300px" }}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div style={{ color: "red" }}>{formik.errors.password}</div>
                ) : null}
              </div>
              <br />
              <div className="text-center">
                <button
                  type="submit"
                  style={{
                    width: "300px",
                    border: "none",
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  Register
                </button>

                <br />
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
