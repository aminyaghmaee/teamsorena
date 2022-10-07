import React from "react";
import { useState } from "react";
import "./morabian.css";
import { useNavigate } from "react-router-dom";
import woman from "../../data/woman-img.jpg";

const Morabian = () => {
  const navigate = useNavigate();
  const [morabi, setMorabi] = useState([
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "۰۹۳۵۰۷۳۹۳۷۴",
      imageId: woman,
    },
  ]);
  return (
    <>
      <div className="nav">
        <h2>باشگاه مربیان تیم سورنا</h2>
        <i
          onClick={() => {
            navigate("/");
          }}
          className="fa fa-home"
        ></i>
      </div>
      <div className="morabian">
        {morabi.map((e) => {
          return (
            <div className="morabi">
              <div>
                <div>
                  <img className="morabi-img" src={e.imageId} alt="" />
                </div>
                <span className="age"> سن: {e.age}</span>
                <h4>{e.name}</h4>
                <h5>شماره تماس: {e.phoneNumber}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Morabian;
