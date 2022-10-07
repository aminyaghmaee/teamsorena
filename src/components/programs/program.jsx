import React from "react";
import "./program.css";
import { useNavigate } from "react-router-dom";
const Program = () => {
const navigate = useNavigate()
  return (
    <div className="program" id="program">
      <div className="section">
        <h3>مشاهده مربیان</h3>
        <p>
          ما با ارزیابی مدارک مربیگری و عملکرد مربیان در رشته های روزشی مختلف
          سعی در جمع آوری بهترین مربیان کشور نموده ایم.
        </p>
        <span
          onClick={() => {
            navigate("/morabian");
          }}
        >
          مشاهده
        </span>
      </div>
      <div className="section">
        <h3>مشاهده رشته های ورزشی</h3>
        <p>
          کاراته،بوکس،ووشو، تکواندو، نینجوتسو، دفاع شخصی، جودو، ژیمناستیک،
          ایروبیک، یوگا، پیلاتس، ایروفیت،بوت کمپ، trx، cx
        </p>
        <span
          onClick={() => {
            navigate("/reshteha");
          }}
        >
          مشاهده
        </span>
      </div>
      <div className="section">
        <h3>مشاهده انواع برنامه های ورزشی</h3>
        <p>
          مربیان با آنالیز دقیق پارامترهایی از جمله مکان ورزشی، هدف، آسیب بدنی،
          تجهیزات ورزشی، و شرایط جسمی شما، مناسب ترین برنامه ی تمرینی مورد نیاز
          بدن شما را ارایه میدهند.
        </p>
        <span
          onClick={() => {
            navigate("/barnameha");
          }}
        >
          مشاهده
        </span>
      </div>
      <div className="section">
        <h3>مشاهده انواع برنامه های غذایی</h3>
        <p>
          میتوانید انواع برنامه های غذایی که مربیان با توجه به شرایط فیزیکی شما
          و سایر ورزشکاران داده اند مشاهده نمایید و الگوبرداری کنید.
        </p>
        <span
          onClick={() => {
            navigate("/qazai");
          }}
        >
          مشاهده
        </span>
      </div>
    </div>
  );
};

export default Program;
