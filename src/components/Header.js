import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./styles/header.css";

export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header-container">
        <Link to="/">
          {<img className="logo-img" src={Logo} alt="Little Lemon Logo" />}
        </Link>
        <nav>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservation</Link>
            </li>
            <li>
              <Link to="#">Order Online</Link>
            </li>
            <li>
              <Link to="#">Login</Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <AiOutlineClose size={20} style={{ color: "#333333" }} />
          ) : (
            <AiOutlineMenu
              size={30}
              style={{
                color: "#333333",
                borderLeft: "1px solid #333333",
                paddingLeft: "10px",
                height: "20px",
              }}
            />
          )}
        </div>
      </header>
    </>
  );
};
