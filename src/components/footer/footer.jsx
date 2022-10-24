import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="blur footer-blur"></div>
      <ul>
        <li>
          <a href="https://www.instagram.com/sorena_gym_club/">
            <i className="fa fa-instagram icons"></i>
          </a>
        </li>
        <li>
          <a href="https://telegram.me/amin_yaghmaee">
            <i className="fa fa-telegram icons"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/+989025899834">
            <i className="fa fa-whatsapp icons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
