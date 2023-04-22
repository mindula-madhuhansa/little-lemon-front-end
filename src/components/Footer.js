import React from "react";
import Logo from "./assets/logo.png";
import "./styles/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-container">
          <img src={Logo} alt="Little Lemon Logo" />
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
          <div className="footer-content">
            <div className="footer-navigation">
              <h5>LITTLE LEMON</h5>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="#">About</NavLink>
                </li>
                <li>
                  <NavLink to="#">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/reservations">Reservation</NavLink>
                </li>
                <li>
                  <NavLink to="#">Order Online</NavLink>
                </li>
                <li>
                  <NavLink to="#">Login</NavLink>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h5>CONTACT US</h5>
              <ul>
                <li>6634 W 64th Pl, Chicago, Illinois</li>
                <li>Tel: 773 229 8849</li>
                <li>info@littlelemon.com</li>
              </ul>
            </div>
            <div className="social">
              <h5>SOCIAL MEDIA</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
