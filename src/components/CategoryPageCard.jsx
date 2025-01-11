import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

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
      <div className="card bg-base-100 h-full w-full  shadow-xl">
        <figure>
          <img className="w-[300px] h-[500px] " src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">{Name}</h2>
          <p>
            by <span className="font-semibold">{AuthorName}</span>
          </p>
          <p className="text-green-600">{Category}</p>
          <div className="flex items-center gap-2">
            <ReactStars
              count={5}
              value={Rating}
              size={24}
              activeColor="#ffd700"
              edit={false}
              isHalf={true}
            />
            <span>({Rating})</span>
          </div>
          {/* <p>rating: {Rating}</p> */}
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
