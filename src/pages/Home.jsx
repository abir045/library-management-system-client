import React from "react";
import SliderImg from "../components/Slider";
import Categories from "../components/Categories";
import Review from "../components/Review";
import Cloud from "../components/Cloud";
import ReadingLove from "../components/ReadingLove";

const Home = () => {
  return (
    <div>
      <SliderImg />
      <Categories />
      <Cloud />
      <Review />
      <ReadingLove />
    </div>
  );
};

export default Home;
