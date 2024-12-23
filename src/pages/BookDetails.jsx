import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const {
    Image,
    Name,
    AuthorName,
    Category,
    Quantity,
    Rating,
    ShortDescription,
    BookContent,
  } = data;

  console.log(data);
  return (
    <div>
      <h2 className="text-center text-3xl my-10">Book Details</h2>

      <div className="card bg-base-100 w-96 shadow-xl mx-auto my-10">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>
            by - <span className="font-semibold">{AuthorName}</span>
          </p>
          <p className="font-semibold">
            Category: <span className="">{Category}</span>{" "}
          </p>
          <p className="font-semibold">
            Quantity: <span className="">{Quantity}</span>{" "}
          </p>
          <p className="font-semibold">Rating: {Rating}</p>
          <p className="font-semibold">Summary: {ShortDescription}</p>
          <p className="font-semibold">
            {" "}
            Content: <span className="italic"> {BookContent}</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-neutral">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
