import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertise></Advertise>
      <div>
        <h2 className="text-4xl font-semibold font-mono text-center lg:mt-14">
          Product Categories
        </h2>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
