import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import AOS from "aos";
import About from "../About/About";
import PopularArea from "../PopularArea/PopularArea";
import Properties from "../Properties/Properties";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <Helmet>
        <title>QuickRent | Home</title>
      </Helmet>
      <Banner></Banner>
      <About></About>
      <PopularArea></PopularArea>
      <Properties></Properties>
    </div>
  );
};

export default Home;
