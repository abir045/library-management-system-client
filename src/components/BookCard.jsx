import React from "react";
import { useLocation } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    Image,
    Name,
    AuthorName,
    Category,
    Quantity,
    Rating,
    ShortDescription,
    BookContent,
  } = book;

  const { pathname } = useLocation();
  const normalizedPathname = pathname.toLowerCase();
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
            <button className="btn btn-primary">Update</button>
          </div>

          {normalizedPathname === `/category/${Category}` && (
            <div>
              <button className="btn btn-neutral">Details</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
