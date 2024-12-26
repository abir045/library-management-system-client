import React, { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const email = user.email;

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;

    const Image = form.Image.value;
    const Name = form.name.value;
    const AuthorName = form.authorName.value;
    const Category = form.category.value;
    const Quantity = parseFloat(form.quantity.value);
    const Rating = parseFloat(form.rating.value);
    const ShortDescription = form.ShortDescription.value;
    const BookContent = form.BookContent.value;

    const newBook = {
      Image,
      Name,
      AuthorName,
      Category,
      Quantity,
      Rating,
      ShortDescription,
      BookContent,
    };

    console.log(newBook);

    fetch("https://library-management-system-server-chi.vercel.app/allbooks", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-10">Add a Book</h2>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book World | Add a Book</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-5">
        <form onSubmit={handleAddBook}>
          {/* Image URL */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Image"
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Book Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Author and Category */}

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="authorName"
                placeholder="Author Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <select name="category" className="select select-bordered w-full">
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Fiction">Fiction</option>
                <option value="Novel">Novel</option>
                <option value="Thriller">Thriller</option>

                <option value="Drama">Drama</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="self-help">Self-Help</option>
              </select>
            </label>
          </div>
          {/* </div> */}

          {/* Rating */}
          <div className="mb-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (1-5)"
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                  step="0.1"
                />
              </label>
            </div>
          </div>

          {/* quantity */}

          <div className="mb-8">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* short description */}

          <div className="form-control mb-2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <textarea
                name="ShortDescription"
                placeholder="Enter book description..."
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </label>
          </div>

          {/* book content */}
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text">Book Content</span>
            </label>
            <label className="input-group">
              <textarea
                name="BookContent"
                placeholder="Enter book content..."
                className="textarea textarea-bordered w-full h-32"
                required
              ></textarea>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-neutral btn-wide"
            value={"ADD"}
          />
        </form>
      </div>
    </div>
  );
};

export default AddBook;
