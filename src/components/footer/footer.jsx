import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="blur footer-blur"></div>
      <ul>
        <li className="icons">
          <a href="https://www.instagram.com/sorena_gym_club/">
            <i className="fa fa-instagram"></i>
          </a>
        </li>
        <li className="icons">
          <a href="https://web.telegram.org/z/#361011462">
            <i className="fa fa-telegram"></i>
          </a>
        </li>
        <li className="icons">
          <i className="fa fa-whatsapp"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
