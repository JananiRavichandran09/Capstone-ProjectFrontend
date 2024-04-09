import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage';
import Home from './Components/Home';
import Login from './Components/Login';
import HomePage from './Components/HomePage';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
     
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/goldrate" element={<HomePage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route
              path="/resetpassword/:id/:token"
              element={<ResetPassword />}
            />
          </Routes>
        </BrowserRouter>
      
    </div>
  );
};

export default App;