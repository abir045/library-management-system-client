import React from "react";
import SliderImg from "../components/Slider";
import Categories from "../components/Categories";
import Review from "../components/Review";
import Cloud from "../components/Cloud";
import ReadingLove from "../components/ReadingLove";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book World | Home</title>
      </Helmet>
      <SliderImg />
      <Categories />
      <Cloud />
      <Review />
      <ReadingLove />
    </div>
  );
};

export default Home;
