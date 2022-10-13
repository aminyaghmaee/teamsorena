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
          <a href="https://web.telegram.org/z/#361011462">
            <i className="fa fa-telegram icons"></i>
          </a>
        </li>
        <li>
          <i className="fa fa-whatsapp icons"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
