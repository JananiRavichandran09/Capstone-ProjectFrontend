import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
     
    e.preventDefault()
    toast.success("Login Successfull!");
    axios.post('http://localhost:4000/api/user/login', { email, password })
      .then(result => {
        console.log(result)
        let toastmessage = toast.success("Login Successfull!");
        if (result.data === "Success") {
          
        
            navigate("/goldrate");
          
        }
        
      
      })
      .catch(err => {
        console.log(err)
      })
  }
 
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
            src="https://store.krishnajewellers.com/cdn/shop/products/JPGN5963-4.jpg?v=1677062832"
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
              Login Here
            </h1>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label
                  for="exampleFormControlInput1"
                  class="col-form-label"
                  style={{ marginRight: "270px", color: "blue" }}
                >
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "300px" }}
                />
                <label
                  for="inputPassword5"
                  class="form-label"
                  style={{ marginRight: "245px", color: "blue" }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: "300px" }}
                />
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
                    Login
                  </button>

                  <p>
                    <Link to="/forgotpassword" style={{ color: "red" }}>
                      Forgot Password
                    </Link>
                  </p>
                  <p>
                    You don't have an account?{" "}
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
