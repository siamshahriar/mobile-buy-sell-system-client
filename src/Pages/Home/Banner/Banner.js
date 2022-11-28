import React from "react";
import "./Bannner.css";

const Banner = () => {
  const image =
    "https://www.stickyads.tv/wp-content/uploads/2020/09/stickyads-3-1200x801.jpg";
  return (
    <div
      className="hero rounded-lg"
      style={{ backgroundImage: `url("${image}")`, height: "60vh" }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Mobile Buy and Sell</h1>
          <p className="mb-5">
            Used mobile phone prices in Bangladesh: Tablets and smart phones We
            sell mobile devices and accessories for top prices.
          </p>
          <button className="btn glass text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
