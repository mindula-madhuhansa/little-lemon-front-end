import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.jpg";
import Navbar from "./Navbar";
import "./styles/headerElement.css";

const HeaderElement = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon Logo" />}
          </NavLink>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default HeaderElement;
