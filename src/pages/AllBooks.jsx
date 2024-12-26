import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const loadedBooks = useLoaderData();
  const [showAvailable, setShowAvailable] = useState(false);

  console.log(loadedBooks);

  const displayedBooks = showAvailable
    ? loadedBooks.filter((book) => book.Quantity > 0)
    : loadedBooks;

  const toggleAvailableBooks = () => {
    setShowAvailable(!showAvailable);
  };

  return (
    <div>
      <h2 className="text-center text-3xl mt-20 font-bold">All Books</h2>

      <div className="flex justify-center mt-10">
        <button
          onClick={toggleAvailableBooks}
          className=" btn btn-neutral  text-white px-4 py-2 rounded-md transition duration-300"
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] mt-10">
        {displayedBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
