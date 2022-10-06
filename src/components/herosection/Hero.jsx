import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import right from "../../assests/right-side2.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
const navigate = useNavigate();
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>برای دریافت برنامه ورزشی فقط کافیه کلیک کنی!</span>
        </div>
        {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span>مربی خودتو انتخاب کن </span>
            <br />
            <span>و رایگان&nbsp;</span>
            <span className="stroke-text clicked"> مشاوره</span>
            <span>&nbsp;بگیر</span>
          </div>
        </div>
      </div>
      <div className="right-h">
        <button onClick={()=>{navigate("./login")}} className="btn">ورود / ثبت نام</button>

        <img src={right} alt="" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
