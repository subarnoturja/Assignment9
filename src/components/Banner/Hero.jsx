import React from "react";

const Hero = ({ image, text }) => {
  return (
    <div className="p-3 md:p-3">
      <div
      className="hero min-h-screen" data-aos='zoom-in'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70">
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl mt-40">
            <h1 className="mb-5 text-5xl font-bold text-white">Home! Where Comfort Meets Convenience</h1>
            <p className="mb-5 text-lg text-white">{text}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
