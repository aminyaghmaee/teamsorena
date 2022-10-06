import React from "react";
import Program from "./program";
import "./programs.css";

import { Link } from "react-router-dom";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="blur programs-blur1"></div>
      <div className="blur programs-blur2"></div>
      <div className="programs-header">
        <span>&nbsp;چند کیلو اضافه وزن داری؟ </span>
        <span>&nbsp;برای محاسبه&nbsp;</span>
        <Link className="stroke-text click" to="/bmi">
          کلیک کن
        </Link>
      </div>
      <Program />
    </div>
  );
};

export default Programs;
