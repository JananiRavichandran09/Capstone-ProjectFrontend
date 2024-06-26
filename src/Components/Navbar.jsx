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
            
            
          </div>
        </nav>
      </div>
    );
};

export default Navbar;