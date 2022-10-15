import React from "react";
import "../signup/signup.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Signup = () => {  
  const schema = yup.object().shape({
    username: yup.string().required("نام کاربری حتما وارد شود"),
    password: yup
      .string()
      .required("رمز عبور حتما وارد شود")
      .min(4, "رمز عبور حداقل باید 4 کارکتر باشد")
      .max(10,"رمز عبور حداکثر باید 10 کارکتر باشد")
  });
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
          <h2>ثبت نام</h2>
          <div className="input-box-signup">
            <input {...register("username")} type="text" />
            <span>نام کاربری</span>
            <div className="line1"></div>
            <p>{errors.username?.message}</p>
          </div>
          <div className="input-box-signup">
            <input {...register("password")} type="password" />
            <span>رمز عبور</span>
            <div className="line2"></div>
            <p>{errors.password?.message}</p>
          </div>
          <button type="submit" className="submit-input-signup submit-input">ورود</button>
        </form>
      </div>
    </div>
  );
  };
  export default Signup;