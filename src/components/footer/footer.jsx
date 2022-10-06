import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div id="footer">
      <div className="blur footer-blur"></div>
      <ul>
        <li className="icons">
          <i className="fa fa-instagram"></i>
        </li>
        <li className="icons">
          <i className="fa fa-telegram"></i>
        </li>
        <li className="icons">
          <i className="fa fa-whatsapp"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
