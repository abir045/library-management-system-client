import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import BookCard from "./BookCard";
import CategoryPageCard from "./CategoryPageCard";
import { Helmet } from "react-helmet";

const CategoryPage = () => {
  const data = useLoaderData();
  console.log(data);

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book World | Category wise books</title>
      </Helmet>{" "}
      <h2 className="text-center text-3xl my-10">Category wise books:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {data.map((book) => (
          <CategoryPageCard key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
