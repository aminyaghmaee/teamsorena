import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reshteha.css";
const Reshteha = () => {
  const navigate = useNavigate();
  const [reshte, setReshte] = useState([
    "یوگا",
    "پیلاتس",
    "ایروفیت",
    "بوت کمپ",
    "تی آر ایکس",
    "سی ایکس",
    "ایروبیک",
    "ژیمناستیک",
    "جودو",
    "دفاع شخصی",
    "نینجوتسو",
    "ووشو",
    "بوکس",
    "کاراته",
  ]);
  return (
    <>
      <div className="nav">
        <h2>رشته های ورزشی تیم سورنا</h2>
        <i
          onClick={() => {
            navigate("/");
          }}
          className="fa fa-home"
        ></i>
      </div>
      <div className="reshteha">
        {reshte.map((e) => {
          return (
            <div className="reshte">
              <h4>{e}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reshteha;
