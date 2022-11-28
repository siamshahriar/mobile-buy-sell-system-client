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
        <h2 className="text-3xl font-semibold text-center">
          Product Categories
        </h2>
      </div>
      <Categories></Categories>
    </div>
  );
};

export default Home;
