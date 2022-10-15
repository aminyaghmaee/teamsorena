import React from "react";
import "../login.form/login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("نام کاربری حتما وارد شود"),
    password: yup
      .string()
      .required("رمز عبور حتما وارد شود")
      .min(4, "رمز عبور حداقل باید 4 کارکتر باشد")
      .max(10,"رمز عبور حداکثر باید 10 کارکتر باشد")
  });
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          <h2>ورود</h2>
          <div className="input-box">
            <span>نام کاربری</span>
            <div className="line1"></div>
            <input {...register("username")} type="text" />

            <p>{errors.username?.message}</p>
          </div>
          <div className="input-box">
            <span>رمز عبور</span>
            <div className="line2"></div>
            <input {...register("password")} type="password" />
            <p>{errors.password?.message}</p>
          </div>
          <div className="links">
            <a href="#">رمز عبور خود را فراموش کرده اید؟</a>
            <a onClick={() => navigate("/signup")} href="#">
              ثبت نام
            </a>
          </div>
          <button type="submit" className="submit-input">
            ورود
          </button>
          {/* <p>{errors}</p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
