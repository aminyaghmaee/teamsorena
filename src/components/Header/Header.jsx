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
              classname="nav-hover"
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth={true}
            >
              <h3 className="h3-nav">
                <i className="fa fa-home"></i>
              </h3>
            </Link>
          </li>
          <li>
            <Link
              classname="nav-hover"
              onClick={() => setMenuOpened(false)}
              to="footer"
              span={true}
              smooth={true}
            >
              <h3 className="h3-nav">ارتباط با ما</h3>
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <h3 className="h3-nav">سوالات متداول</h3>
          </li>
          <li>
            <Link
              classname="nav-hover"
              onClick={() => setMenuOpened(false)}
              to="about"
              span={true}
              smooth={true}
            >
              <h3 className="h3-nav">درباره ما </h3>
            </Link>
          </li>
          <li>
            <Link
              classname="nav-hover"
              onClick={() => setMenuOpened(false)}
              to="program"
              span={true}
              smooth={true}
            >
              <h3 className="h3-nav">خدمات ما</h3>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
  
};

export default Header;
