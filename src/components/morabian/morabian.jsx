import React from "react";
import { useState } from "react";
import "./morabian.css";
import { useNavigate } from "react-router-dom";

const Morabian = () => {
const navigate = useNavigate();
  const [morabi, setMorabi] = useState([
    {
      name: "hoseini",
      age: 22,
      email: "hoseini@yahoo.com",
    },
    {
      name: "rezai",
      age: 46,
      email: "rezai@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    },
    {
      name: "alavi",
      age: 38,
      email: "alavi@yahoo.com",
    }
  ]);
  return (
    <>
      <div className="nav">
        <h2>باشگاه مربیان تیم سورنا</h2>
        <i onClick={()=>{navigate('/')}} className="fa fa-home"></i>
      </div>
      <div className="morabian">
        {morabi.map((e) => {
          return (
            <div className="morabi">
              <div>
                <h4>{e.name}</h4>
                <span>{e.age}</span>
                <h5>{e.email}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Morabian;
