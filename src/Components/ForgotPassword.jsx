import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(
      "https://capstone-project-backend-j3mu.onrender.com/api/user/forgotpassword", { email })
      .then(res => {
        if (res.data.Status === "Success") {
        navigate ('login')
      }
    }) .catch(err => {console.log(err)})
  }

  return (
    <div className="container text-center">
      <h1>
        <i
          className="fa-solid fa-lock fa-lg"
          style={{
            color: "brown",
            marginTop: "100px",
          }}
        ></i>
      </h1>
      <h3
        style={{
          fontFamily: "Libre Caslon Text, serif",
          fontWeight: "bolder",
          fontStyle: "normal",
          color: "navy",
          textWrap: "wrap",
        }}
      >
        Have you Forgot your Password?
      </h3>
      <p style={{ color: "gray", fontWeight: "bold" }}>
        Enter your email we'll send you a link to get back into your account.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
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
              type="email"
              value={email}
              className="form-control"
              id="floatingInput"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Enter your Email</label>
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
