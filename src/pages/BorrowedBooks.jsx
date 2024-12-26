import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./Loading";
import BorrowedCard from "../components/BorrowedCard";
import { Helmet } from "react-helmet";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-5">
        {borrowedBooks.map((book) => (
          <BorrowedCard
            key={book._id}
            book={book}
            handleSuccessfulReturn={handleSuccessfulReturn}
          />
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default BorrowedBooks;
