import React from "react";
import "./mohasebe.css";
import { useNavigate } from "react-router-dom";

const Mohasebe = ({ result, ideal, shakhes, jomle }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-mohasebe">
        <h2>محاسبه ی شاخص توده بدنی</h2>
        <i onClick={() => {navigate("/");}} className="fa fa-home"></i>
      </div>
      <div className="mbmi">
        <span>{`وزن ایده آل شما  ${ideal}  کیلو است`}</span>
        <span>{`شما  ${result}  کیلو ${jomle}`}</span>
        <span>{`شاخص توده بدنی شما  ${shakhes}  است`}</span>
      </div>
    </>
  );
};

export default Mohasebe;
