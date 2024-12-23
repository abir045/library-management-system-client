import React from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const loadedBooks = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-3xl">
        All Books : {loadedBooks.length}{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] mt-10">
        {loadedBooks.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
