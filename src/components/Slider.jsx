import React from "react";
import Slider from "react-slick";
import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.jpg";
import L4 from "../assets/L4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        // background: "red",
        position: "absolute",
        right: "5%",
        scale: "2",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "5%",
        zIndex: "10",
        fontSize: "38",
        scale: "2",
      }}
      onClick={onClick}
    />
  );
}

const SliderImg = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    fade: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="rounded-xl relative">
          <img className="w-full h-[600px] rounded-xl " src={L1} alt="" />
          <h3 className="absolute oswald text-6xl font-bold text-gray-100 top-32  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Welcome to Our Book world
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={L2} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-32 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Explore Our collection
          </h3>
        </div>
        <div className="relative">
          <img className="w-full h-[600px] rounded-xl" src={L4} alt="" />
          <h3 className="absolute oswald text-6xl font-bold top-40 text-white mx-auto  left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            Pick a book of your choice
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderImg;
