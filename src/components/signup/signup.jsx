import React from "react";
import "../login.form/login.css";
import "../signup/signup.css";
const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit} className="form-login">
          <h2>ثبت نام</h2>
          <div className="input-box">
            <input type="text" required="required" />
            <span>نام کاربری</span>
            <div className="line1"></div>
          </div>
          <div className="input-box">
            <input type="password" required="required" />
            <span>رمز عبور</span>
            <div className="line2"></div>
          </div>
          <button className="submit-input-signup submit-input">ورود</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
