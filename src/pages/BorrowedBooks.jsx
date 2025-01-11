import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import BorrowedCard from "../components/BorrowedCard";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("card");
  const email = user?.email;

  useEffect(() => {
    const fetchUserBorrowedBooks = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://library-management-system-server-chi.vercel.app/borrow/${email}`,
          {
            credentials: "include",
          }
        );
        const data = await response.json();
        setBorrowedBooks(data);
        console.log(borrowedBooks);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUserBorrowedBooks();
  }, [email]);

  const handleSuccessfulReturn = (id) => {
    setBorrowedBooks((borrowedBooks) =>
      borrowedBooks.filter((book) => book._id !== id)
    );
  };

  const handleReturn = (book) => {
    const { _id } = book;
    const bookId = book.data._id; // Getting bookId from data

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
        fetch(
          `https://library-management-system-server-chi.vercel.app/borrow/${_id}`,
          {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ bookId }),
          }
        )
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

  const TableView = () => (
    <div className="overflow-x-auto px-5">
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            <th className="p-4">Image</th>
            <th className="p-4">Book Name</th>
            <th className="p-4">Category</th>
            <th className="p-4">Author</th>
            <th className="p-4">Borrowed Date</th>
            <th className="p-4">Return Date</th>
            <th className="p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((book) => (
            <tr key={book._id} className="hover">
              <td className="p-4">
                <img
                  src={book.data.Image}
                  alt={book.data.Name}
                  className="w-16 h-20 object-cover rounded"
                />
              </td>
              <td className="p-4 font-semibold">{book.data.Name}</td>
              <td className="p-4">{book.data.Category}</td>
              <td className="p-4">{book.data.AuthorName}</td>
              <td className="p-4">{book.borrowedDate}</td>
              <td className="p-4">{book.returnDate}</td>
              <td className="p-4">
                <button
                  onClick={() => handleReturn(book)}
                  className="btn btn-neutral btn-sm"
                >
                  Return
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book World | Borrowed Books</title>
      </Helmet>
      <h2 className="text-center text-3xl my-10 font-bold">
        Your Borrowed Books
      </h2>
      <div className="flex justify-center mb-10">
        <select
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
          className="px-4 py-2 border rounded-md bg-white "
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {viewMode === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-5">
          {borrowedBooks.map((book) => (
            <BorrowedCard
              key={book._id}
              book={book}
              handleSuccessfulReturn={handleSuccessfulReturn}
            />
          ))}
        </div>
      ) : (
        <TableView />
      )}

      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;
