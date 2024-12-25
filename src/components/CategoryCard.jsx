import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import fantasy from "../assets/fantasy.json";
import fiction from "../assets/fiction.jpg";
import self from "../assets/self.jpg";
const categoryImages = {
  "self-help": self,
};

const CategoryCard = ({ type }) => {
  const { category } = type;
  return (
    <div className="">
      <Link to={`/category/${category.toLowerCase()}`}>
        <div
          className="card py-20 shadow-xl 
      bg-gray-500 "
        >
          <div className="card-body ">
            <h2 className="font-bold text-3xl text-gray-600 text-center">
              {" "}
              {category}
            </h2>

            {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
