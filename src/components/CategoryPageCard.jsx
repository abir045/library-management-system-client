import React from "react";
import { Link } from "react-router-dom";

const CategoryPageCard = ({ book }) => {
  const {
    _id,
    Image,
    Name,
    AuthorName,
    Category,
    Quantity,
    Rating,
    ShortDescription,
    BookContent,
  } = book;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img className="h-[300px] " src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{Name}</h2>
          <p>
            by <span className="font-semibold">{AuthorName}</span>
          </p>
          <p className="text-green-600">{Category}</p>
          <p>rating: {Rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/allbooks/${_id}`} className="btn btn-neutral">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageCard;
