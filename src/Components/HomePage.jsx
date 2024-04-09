import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {  useNavigate } from "react-router-dom";
const jsonData = {
  goldPrices: {
    "24k": 7324.48,
    "22k": 6714.107,
    "18k": 6103.734,
  },
};
const HomePage = () => {
  axios.defaults.withCredentials = true;
const navigate = useNavigate();
     useEffect(() => {
       axios
         .get("http://localhost:5173/goldrate")
         .then((result) => {
           console.log(result);
           if (result.data !== "Success") {
            
           }
         })
         .catch((err) => console.log(err));
     }, []);

   const [quantity, setQuantity] = useState("");
   const [selectedCarat, setSelectedCarat] = useState("");
   const [selectedUnit, setSelectedUnit] = useState("gram");
   const [totalPrice, setTotalPrice] = useState("");
     
  const calculateTotalPrice = () => {
    const parsedQuantity = parseFloat(quantity);
    if (isNaN(parsedQuantity)) {
      alert("Please enter a valid quantity.");
      return;
    }

    const goldPrice = jsonData.goldPrices[selectedCarat];
    const calculatedTotalPrice =
      goldPrice * parsedQuantity * (selectedUnit === "Pavan" ? 8 : 1);
    setTotalPrice(calculatedTotalPrice);
  };

    return (
      <div className="container-fluid ">
        <div className="text-center">
          <h3
            style={{
              marginTop: "25px",
              fontFamily: "Libre Caslon Text, serif",
              fontWeight: "bolder",
              fontStyle: "normal",
              color: "navy",
              textWrap: "wrap",
            }}
          >
            Gold Rate Calculation
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "40px",
              gap: "15px",
            }}
          >
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ width: "300px" }}
                required
              />
              <label for="floatingInput">Quantity</label>
            </div>
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                style={{ width: "300px" }}
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                required
              >
                <option value="gram">Gram</option>
                <option value="Pavan">Pavan</option>
              </select>
              <label for="floatingSelect">Units</label>
              <p style={{ color: "gray", marginRight: "130px" }}>
                Please Select your unit
              </p>
            </div>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",

              gap: "15px",
            }}
          >
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                style={{ width: "300px" }}
                value={selectedCarat}
                onChange={(e) => setSelectedCarat(e.target.value)}
                required
              >
                <option value="">Select Carat</option>
                <option value="24k">24k</option>
                <option value="22k">22k</option>
                <option value="18k">18k</option>
              </select>
              <label for="floatingSelect">Carat</label>
              <p style={{ color: "gray", marginRight: "130px" }}>
                Please Select your carat
              </p>
            </div>

            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                style={{ width: "300px" }}
              >
                <option value="1">₹</option>
              </select>
              <label for="floatingSelect">Currency</label>
              <p style={{ color: "gray", marginRight: "100px" }}>
                Please Select your currency
              </p>
            </div>
          </div>
          <br />
          <button
            style={{
              width: "250px",
              padding: "10px",
              border: "none",
              backgroundColor: "green",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={calculateTotalPrice}
          >
            Calculate
          </button>
          <br />
          <h3 style={{ marginTop: "14px", fontStyle: "italic" }}>
            Total Amount: ₹{totalPrice}
          </h3>
        </div>
      </div>
    );
};

export default HomePage;