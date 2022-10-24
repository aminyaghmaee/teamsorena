import React from "react";
import { useState } from "react";
import "./morabian.css";
import { useNavigate } from "react-router-dom";
import yoseffard from "../../data/yoseffard.jpg";
const Morabian = () => {
  const navigate = useNavigate();
  const [morabi, setMorabi] = useState([
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
    },
    {
      name: "امین یوسف فرد",
      age: "۲۶",
      phoneNumber: "9350739374",
      imageId: yoseffard,
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
                <div className="information-morabi">
                  <h4>{e.name}</h4>
                  <span className="age"> سن: {e.age}</span>
                  <h5>شماره تماس: {e.phoneNumber}</h5>
                  <a
                    className="without-link btn goftogo"
                    href={`https://wa.me/+98${e.phoneNumber}`}
                  >
                    <span className="">گفتگو</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Morabian;
