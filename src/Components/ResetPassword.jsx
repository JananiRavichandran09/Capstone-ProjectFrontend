import React, { useState } from 'react';
import {  useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const ResetPassword = () => {
const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {id, token} = useParams()
  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://capstone-project-backend-j3mu.onrender.com/api/user/resetpassword/${id}/${token}`,
        { password }
      )
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Password Updated!");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

    return (
      <div className="container text-center ">
        <h3
          style={{
            fontFamily: "Libre Caslon Text, serif",
            fontWeight: "bolder",
            fontStyle: "normal",
            color: "navy",
            textWrap: "wrap",
            marginTop: "150px",
          }}
        >
          Reset Your Password
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div
              className="form-floating mb-3 container"
              style={{
                width: "350px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <input
                type="password"
                name="password"
                value={password}
                className="form-control"
                id="floatingInput"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingInput">New Password</label>
            </div>
            <button
              type="submit"
              style={{
                border: "none",
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                borderRadius: "50px",
                width: "300px",
              }}
            >
              Update
            </button>
          </form>
        </div>
      </div>
    );
};

export default ResetPassword;