import React, { useState } from "react";
import "./Header.css";
import Logo4 from "../../assests/logo7.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo4} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div className="bar" onClick={() => setMenuOpened(true)}>
          <i
            className="fa fa-bars"
            style={{
              cursor: "pointer",
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
            }}
          ></i>
        </div>
      ) : (
        <ul className="header-menu">
          <li className="home-icon">
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth={true}
            >
             <i className="fa fa-home"></i>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="footer"
              span={true}
              smooth={true}
            >
              ارتباط با ما
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>سوالات متداول</li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="about"
              span={true}
              smooth={true}
            >
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="program"
              span={true}
              smooth={true}
            >خدمات ما</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
