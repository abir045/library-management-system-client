import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ type }) => {
  const { category } = type;
  return (
    <div>
      <Link to={`/category/${category.toLowerCase()}`}>
        <div className="card bg-base-100  shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Category: {category}</h2>
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
