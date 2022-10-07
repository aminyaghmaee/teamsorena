import React from "react";
import "./bmi.css";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Bmi = ({ setOpen, setResult, setIdeal, setShakhes, setJomle }) => {
  const navigate = useNavigate();

  const height = useRef();
  const weight = useRef();
  const male = useRef();
  const female = useRef();
  const [gender, setGender] = useState(male);

  const handleChange = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };
  const bmi = () => {
    console.log(typeof (height.current.value));
    navigate("/mohasebe");
    const rWeight = weight.current.value;
    const rHeight = height.current.value;
    if (gender === "male") {
      const ezafeVazn = Math.floor(
        rWeight - (rHeight / 100) * (rHeight / 100) * 25
      );
      if (ezafeVazn > 0) {
        setResult(ezafeVazn);
      } else {
        setResult(-1 * ezafeVazn);
        setJomle("کمبود وزن دارید");
      }
      setIdeal(
        rWeight - Math.floor(rWeight - (rHeight / 100) * (rHeight / 100) * 25)
      );
      setShakhes(Math.floor(rWeight / ((rHeight / 100) * (rHeight / 100))));
    } else if (gender === "female") {
      const ezafeVazn = Math.floor(
        rWeight - (rHeight / 100) * (rHeight / 100) * 23
      );
      if (ezafeVazn > 0) {
        setResult(ezafeVazn);
      } else {
        setResult(-1 * ezafeVazn);
        setJomle("کمبود وزن دارید");
      }
      setIdeal(
        rWeight - Math.floor(rWeight - (rHeight / 100) * (rHeight / 100) * 23)
      );
      setShakhes(Math.floor(rWeight / ((rHeight / 100) * (rHeight / 100))));
    }
  };

  return (
    <div className="fixed">
      <form action="#" className="form">
        <i onClick={()=>navigate("/")} className="fa fa-times times-icon"></i>
        <label htmlFor="height">قد(سانتیمتر)</label>
        <input ref={height} type="number" name="height" />
        <label htmlFor="weight">وزن(کیلوگرم)</label>
        <input ref={weight} type="number" name="weight" />
        <div className="gender">
          <span>جنسیت: &nbsp; </span>
          <label htmlFor="male">مرد</label>
          <input
            onChange={handleChange}
            ref={male}
            type="radio"
            id="male"
            name="male"
            value="male"
          />
          <label htmlFor="female">زن</label>
          <input
            onChange={handleChange}
            ref={female}
            type="radio"
            id="female"
            name="female"
            value="female"
          />
          <input
            onClick={bmi}
            className="link mohasebe btn"
            type="submit"
            value="محاسبه"
            name="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Bmi;
