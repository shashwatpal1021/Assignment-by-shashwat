import React from "react";
import { useRef } from "react";
import "../Styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navbody">
      <header style={{ backgroundColor: "black" }}>
        <p className="shopkart">ShopKart</p>
        <nav ref={navRef}>
          <a href="/#">HOME</a>
          <a href="/#">ABOUT</a>
          <a href="/#">
            <select
              style={{
                backgroundColor: "black",
                color: "white",
                outline: "1px solid black",
                border: "10x solid black",
                padding:"1px",
                borderBottom: "2px solid white",
              }}
              name=""
              id=""
            >
              <option value="OUR PRODUCTS">OUR PRODUCTS</option>
              <option value="Electronics">Electronics</option>
              <option value="Jewelery">Jewelery </option>
              <option value="Men's Clothing">Men's Clothing </option>
              <option value="Women's Clothing">Women's Clothing </option>
            </select>
          </a>
          <a href="/#">CONTACT US</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
