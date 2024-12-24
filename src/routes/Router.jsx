import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AllBooks from "../pages/AllBooks";
import Categories from "../components/Categories";
import CategoryPage from "../components/CategoryPage";
import BookDetails from "../pages/BookDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
        loader: () => fetch("http://localhost:5000/allbooks"),
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.categoryName}`),
      },
      {
        path: "/allbooks/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allbooks/${params.id}`),
      },

      { path: "/register", element: <Register /> },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
