import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div style={{ maxWidth: "100%" }}>
        <nav
          className="navbar navbar-expand-lg "
          style={{
            backgroundColor: "rgba(185, 152, 1, 0.658)",
          }}
        >
          <div className="container">
            <a
              className="navbar-brand"
              href="#"
              style={{
                fontFamily: "Alfa Slab One, serif",
                fontWeight: "400",
                fontStyle: "normal",
                fontSize: "2em",
                color: "rgb(156, 83, 10)",
              }}
            >
              GoldVault
              <img
                src="https://images-platform.99static.com/7qa3U7A2HyhjidneoU9AlNJEObI=/500x500/top/smart/99designs-contests-attachments/49/49121/attachment_49121352"
                width={"50px"}
                height={"50px"}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{border:"1px solid black"}}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
             
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;