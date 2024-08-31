import React from "react";

const Hero = ({ image, text }) => {
  return (
    <div
      className="hero min-h-screen" data-aos='zoom-in' data-aos-duration="1000"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-lg text-white">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
