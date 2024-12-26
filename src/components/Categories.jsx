import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import fiction from "../assets/fiction.jpg";
const Categories = () => {
  const [cats, setCats] = useState([]);
  //   const categoryData = useLoaderData();
  //   console.log(categoryData);

  useEffect(() => {
    fetch("https://library-management-system-server-chi.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCats(data.slice(0, 4)));
  }, []);

  //   console.log(cats);

  return (
    <div className="mx-auto max-w-7xl px-5">
      <h2 className="text-center text-3xl mt-10 font-bold">All categories</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 ">
        {cats.map((type, index) => (
          <CategoryCard key={index} type={type} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
