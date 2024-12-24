import React from "react";
import Swal from "sweetalert2";

const BorrowedCard = ({ book, handleSuccessfulReturn }) => {
  const { Image, Name, Category, AuthorName } = book.data;
  const { returnDate, borrowedDate, _id } = book;
  const bookId = book.data._id;

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to return this book?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/borrow/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ bookId }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Book has been returned successfully.",
                icon: "success",
              });
              handleSuccessfulReturn(_id);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>
            by - <span className="font-semibold">{AuthorName}</span>{" "}
          </p>
          <p>
            Category: <span className="font-semibold">{Category}</span>{" "}
          </p>
          <p>
            Borrowed Date: <span className="font-semibold">{borrowedDate}</span>{" "}
          </p>
          <p>
            Return Date: <span className="font-semibold">{returnDate}</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleReturn(_id)}
              className="btn btn-neutral"
            >
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowedCard;
