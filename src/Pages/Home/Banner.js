import React from "react";
import engine from "../../assets/images/CarParts/car-engine.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={engine} alt="" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Best website for Superb Car Parts
          </h1>
          <p className="py-6">
            Superior Car Parts is your source for auto parts, accessories and
            advice. We ship auto parts and body parts from over 300
            manufacturers to customers' doors worldwide, all at warehouse
            prices. Easy to use parts catalog.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
