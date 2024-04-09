import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
 

    return (
      <div className="m-4 p-5 text-center">
        <h2
          style={{
            fontFamily: "Libre Caslon Text, serif",
            fontWeight: "700",
            fontSize: "2rem",
            color: "rgb(156, 83, 0)",
          }}
        >
          Welcome You to GoldVault
        </h2>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://t4.ftcdn.net/jpg/05/79/13/69/360_F_579136942_Bj9ReQ4A7CDNZaWU03vkrHeiHzBeXILe.jpg"
            width={"200px"}
            height={"150px"}
          />
          <img
            src="https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14="
            width={"200px"}
            height={"150px"}
          />
          <img
            src="https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=OYp1k0OVJObYq9hqVK_r6NwYa_W54km4nya1R-ovIUY="
            width={"200px"}
            height={"150px"}
          />
          <br />
          <p>
            <h5 style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
              About Us
            </h5>
            <div>
              <i>
                <mark style={{ backgroundColor: "aqua" }}>
                  Gold Rate Calculation
                </mark>
              </i>
            </div>
            Welcome to our platform, your trusted source for accurate and
            up-to-date gold rate calculations. Our team of experts meticulously
            curates real-time data from various reputable sources to provide you
            with the most reliable gold rates. Whether you're a seasoned
            investor, jeweler, or simply someone interested in monitoring gold
            prices, our user-friendly interface makes it easy to track
            fluctuations in the market. Join us and stay ahead in the dynamic
            world of gold trading.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "navy",

              padding: "10px",
              border: "none",
              borderRadius: "30px",
              width: "100px",
            }}
          >
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "white" }}
            >
              Register
            </Link>
          </button>
          <button
            style={{
              backgroundColor: "navy",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "30px",
              width: "100px",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    );
};

export default Home;