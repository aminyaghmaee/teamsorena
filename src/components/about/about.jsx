import React from "react";
import "./about.css";
import image1 from "../../assests/img1.JPG";
import image3 from "../../assests/img3.JPG";
import image4 from "../../assests/img4.JPG";
import image5 from "../../assests/img5.JPG";
import tick from "../../assests/tick.png";
import logo4 from "../../assests/logo8.png";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
      </div>
      <div className="right-r">
        <span className="stroke-text about-us">درباره ما</span>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>
              تیم سورنا با کمک بهترین مربیان کشور و قهرمانان جهان در بیش از ۱۷
              رشته ورزشی آماده خدمت رسانی به تمامی ورزش دوستان میباشد.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              تیم سورنا با کمک بهترین مربیان کشور و قهرمانان جهان در بیش از ۱۷
              رشته ورزشی آماده خدمت رسانی به تمامی ورزش دوستان میباشد.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              تیم سورنا با کمک بهترین مربیان کشور و قهرمانان جهان در بیش از ۱۷
              رشته ورزشی آماده خدمت رسانی به تمامی ورزش دوستان میباشد.
            </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>
              تیم سورنا با کمک بهترین مربیان کشور و قهرمانان جهان در بیش از ۱۷
              رشته ورزشی آماده خدمت رسانی به تمامی ورزش دوستان میباشد.
            </span>
          </div>
        </div>
        <div>
          <img className="logo4" src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
