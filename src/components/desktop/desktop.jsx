import React from "react";
import Hero from "../herosection/Hero";
import Programs from "../programs/programs";
import About from "../about/about";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";

const Desktop = () => {
  return (
    <>
      <Hero />
      <Programs />
      <About />
      <Footer />
      <Outlet />
    </>
  );
};

export default Desktop;
