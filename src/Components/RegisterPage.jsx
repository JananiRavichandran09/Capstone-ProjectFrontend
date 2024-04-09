
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterPage = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 const navigate = useNavigate()
  const handleSubmit = (e) => {
  
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/user/register", {
        username,
        email,
        password,
      })
      .then((result) => {
       alert("Registration successful! ");
        if (result.data.Status === "success") {
         
          navigate('/login')
        } 
      })
      .catch((err) => {
        console.error(err);
        toast.error("Registration failed! Please try again.");
      });
  };
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
              <form onSubmit={handleSubmit}>
                <div className="mb-3 ">
                  <label
                    for="inputuserName"
                    class="form-label"
                    style={{ marginRight: "215px", color: "blue" }}
                  >
                    Username<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="inputuserName"
                    class="form-control"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    requiblue
                    style={{ width: "300px" }}
                  />

                  <label
                    for="exampleFormControlInput1"
                    class="col-form-label"
                    style={{ marginRight: "245px", color: "blue" }}
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
                    style={{ marginRight: "215px", color: "blue" }}
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
                    requiblue
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
                      Register
                    </button>

                    <br />
                    <p>
                      Already have an account? <Link to="/login">Login</Link>
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

export default RegisterPage;

