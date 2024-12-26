import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import AllBooks from "../pages/AllBooks";
import Categories from "../components/Categories";
import CategoryPage from "../components/CategoryPage";
import BookDetails from "../pages/BookDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import BorrowedBooks from "../pages/BorrowedBooks";
import UpdateBook from "../components/UpdateBook";
import AddBook from "../pages/AddBook";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: (
          <PrivateRoute>
            <AllBooks />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://library-management-system-server-chi.vercel.app/allbooks",
            { credentials: "include" }
          ),
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: () =>
          fetch(
            "https://library-management-system-server-chi.vercel.app/categories"
          ),
      },
      {
        path: "/category/:categoryName",
        element: <CategoryPage />,
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-server-chi.vercel.app/category/${params.categoryName}`
          ),
      },
      {
        path: "/allbooks/:id",
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-server-chi.vercel.app/allbooks/${params.id}`
          ),
      },

      {
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-server-chi.vercel.app/allbooks/${params.id}`
          ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
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
