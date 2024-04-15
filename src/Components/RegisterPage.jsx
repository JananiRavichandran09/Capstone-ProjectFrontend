import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post(
          "https://capstone-project-backend-j3mu.onrender.com/api/user/register",
          {
            username,
            email,
            password,
          }
        )
        .then((result) => {
          alert("Registration successful! ");
          if (result.data.Status === "success") {
            navigate("/login");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Registration failed! Please try again.");
        });
    }
  };

  return (
    <div className="container-fluid">
      <div className="text-center">
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
              <div className="mb-3">
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
                  className={`form-control ${usernameError && "is-invalid"}`}
                  aria-describedby="passwordHelpBlock"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ width: "300px" }}
                />
                {usernameError && (
                  <div className="invalid-feedback">{usernameError}</div>
                )}

                <label
                  htmlFor="exampleFormControlInput1"
                  className="col-form-label"
                  style={{ marginRight: "245px", color: "blue" }}
                >
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError && "is-invalid"}`}
                  id="exampleFormControlInput1"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "300px" }}
                />
                {emailError && (
                  <div className="invalid-feedback">{emailError}</div>
                )}

                <label
                  htmlFor="inputPassword5"
                  className="form-label"
                  style={{ marginRight: "215px", color: "blue" }}
                >
                  Password<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className={`form-control ${passwordError && "is-invalid"}`}
                  aria-describedby="passwordHelpBlock"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "300px" }}
                />
                {passwordError && (
                  <div className="invalid-feedback">{passwordError}</div>
                )}

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

// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const RegisterPage = () => {

//   const [username, setUsername] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//  const navigate = useNavigate()
//   const handleSubmit = (e) => {

//     e.preventDefault();
//     axios
//       .post(
//         "https://capstone-project-backend-j3mu.onrender.com/api/user/register",
//         {
//           username,
//           email,
//           password,
//         }
//       )
//       .then((result) => {
//         alert("Registration successful! ");
//         if (result.data.Status === "success") {
//           navigate("/login");
//         }
//       })
//       .catch((err) => {
//         console.error(err);
//         toast.error("Registration failed! Please try again.");
//       });
//   };
//     return (
//       <div className="container-fluid ">
//         <div className="text-center ">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: "80px",
//               marginTop: "80px",
//             }}
//           >
//             <img
//               src="https://etimg.etb2bimg.com/thumb/msid-105058534,width-1200,resizemode-4/.jpg"
//               style={{ width: "320px", height: "350px" }}
//             />
//             <div>
//               <h1
//                 style={{
//                   fontFamily: "Libre Caslon Text, serif",
//                   fontWeight: "700",
//                   fontStyle: "normal",

//                   color: "rgb(156, 83, 0)",
//                 }}
//               >
//                 Register Here
//               </h1>
//               <ToastContainer />
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3 ">
//                   <label
//                     for="inputuserName"
//                     class="form-label"
//                     style={{ marginRight: "215px", color: "blue" }}
//                   >
//                     Username<span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="inputuserName"
//                     class="form-control"
//                     aria-describedby="passwordHelpBlock"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     requiblue
//                     style={{ width: "300px" }}
//                   />

//                   <label
//                     for="exampleFormControlInput1"
//                     class="col-form-label"
//                     style={{ marginRight: "245px", color: "blue" }}
//                   >
//                     Email<span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="email"
//                     class="form-control"
//                     id="exampleFormControlInput1"
//                     placeholder="name@gmail.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     style={{ width: "300px" }}
//                   />
//                   <label
//                     for="inputPassword5"
//                     class="form-label"
//                     style={{ marginRight: "215px", color: "blue" }}
//                   >
//                     Password<span style={{ color: "red" }}>*</span>
//                   </label>
//                   <input
//                     type="password"
//                     id="inputPassword5"
//                     class="form-control"
//                     aria-describedby="passwordHelpBlock"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     requiblue
//                     style={{ width: "300px" }}
//                   />
//                   <br />
//                   <div className="text-center">
//                     <button
//                       type="submit"
//                       style={{
//                         width: "300px",
//                         border: "none",
//                         backgroundColor: "green",
//                         color: "white",
//                         padding: "10px",
//                         borderRadius: "5px",
//                       }}
//                     >
//                       Register
//                     </button>

//                     <br />
//                     <p>
//                       Already have an account? <Link to="/login">Login</Link>
//                     </p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default RegisterPage;
