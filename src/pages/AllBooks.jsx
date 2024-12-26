import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const loadedBooks = useLoaderData();
  const [showAvailable, setShowAvailable] = useState(false);
  const [viewMode, setViewMode] = useState("card");

  console.log(loadedBooks);

  const displayedBooks = showAvailable
    ? loadedBooks.filter((book) => book.Quantity > 0)
    : loadedBooks;

  const toggleAvailableBooks = () => {
    setShowAvailable(!showAvailable);
  };

  const TableView = () => (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Update
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {displayedBooks.map((book) => (
            <tr key={book._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={book.Image}
                  alt={book.title}
                  className="h-20 w-16 object-cover"
                />
              </td>
              <td className="px-6 py-4">{book.Name}</td>
              <td className="px-6 py-4">{book.AuthorName}</td>
              <td className="px-6 py-4">{book.Category}</td>

              <td className="px-6 py-4">{book.Rating}</td>
              <td className="px-6 py-4">
                <Link to={`/update-book/${book._id}`}>
                  <button className="btn btn-neutral">Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <h2 className="text-center text-3xl mt-20 font-bold">All Books</h2>

      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={toggleAvailableBooks}
          className=" btn btn-neutral  text-white px-4 py-2 rounded-md transition duration-300"
        >
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>

        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[5%] mt-10">
          {displayedBooks.map((book) => (
            <BookCard key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <TableView />
      )}
    </div>
  );
};

export default AllBooks;
