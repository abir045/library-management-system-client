import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBook = () => {
  const book = useLoaderData();

  const navigate = useNavigate();

  const { _id, Image, Name, AuthorName, Category, Rating } = book;
  //   console.log(book);

  const handleUpdateBook = (e) => {
    e.preventDefault();
    // console.log(e.target.rating.value);

    const form = e.target;
    const updatedBook = {
      Image: form.Image.value,
      Name: form.name.value,
      AuthorName: form.authorName.value,
      Category: form.category.value,
      Rating: parseFloat(form.rating.value),
    };

    console.log(updatedBook);

    fetch(`http://localhost:5000/allbooks/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/allbooks");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message || "Failed to update book. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="">
      <h2 className="text-3xl text-center my-20">Update book</h2>
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleUpdateBook}>
          {/* Image URL */}
          {/* <div className="md:flex gap-4 mb-8"> */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="Image"
                defaultValue={Image}
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
                defaultValue={Name}
                placeholder="Book Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* </div> */}

          {/* Author and Category */}
          {/* <div className="md:flex gap-4 mb-8"> */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="authorName"
                defaultValue={AuthorName}
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
              <select
                name="category"
                defaultValue={Category}
                className="select select-bordered w-full"
              >
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Fiction">Fiction</option>

                <option value="Mystery">Mystery</option>
                <option value="Programming">Programming</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="Children">Children</option>
              </select>
            </label>
          </div>
          {/* </div> */}

          {/* Rating */}
          <div className="mb-8">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  defaultValue={Rating}
                  placeholder="Rating (1-5)"
                  className="input input-bordered w-full"
                  min="1"
                  max="5"
                  step="0.1"
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          {/* <div className="flex gap-4"> */}
          <input
            type="submit"
            // value={loading ? "Updating..." : "Update Book"}
            className="btn btn-neutral "
            // disabled={loading}
          />

          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
