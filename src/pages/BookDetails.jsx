import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [currentQuantity, setCurrenQuantity] = useState(data.Quantity);
  const email = user?.email;
  const name = user?.displayName;
  const date = moment();
  const borrowedDate = date.format("D/MM/YYYY");

  const {
    _id,
    Image,
    Name,
    AuthorName,
    Category,
    Quantity,
    Rating,
    ShortDescription,
    BookContent,
  } = data;

  // console.log(data);

  const handleBorrow = (e) => {
    e.preventDefault();

    const form = e.target;
    const returnDate = moment(form.returnDate.value).format("D/MM/YYYY");

    const newBorrow = {
      name,
      email,
      returnDate,
      borrowedDate,
      data,
    };

    console.log(newBorrow);

    fetch("http://localhost:5000/borrow", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBorrow),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === false) {
          const modal = document.getElementById("my_modal_4");
          modal.close();
          Swal.fire({
            title: "Error!",
            text: data.message || "You have already borrowed this book",
            icon: "error",
            confirmButtonText: "Ok",
          });

          return;
        }

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You Borrowed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //close modal
          const modal = document.getElementById("my_modal_4");
          modal.close();
        }
      })
      .catch((error) => {
        // setIsLoading(false);

        Swal.fire({
          title: "Error!",
          text: error.message || "Failed to borrow book",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl my-10">Book Details</h2>

      <div className="card bg-base-100 w-96 shadow-xl mx-auto my-10">
        <figure>
          <img src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>
            by - <span className="font-semibold">{AuthorName}</span>
          </p>
          <p className="font-semibold">
            Category: <span className="">{Category}</span>{" "}
          </p>
          <p className="font-semibold">
            Quantity: <span className="">{Quantity}</span>{" "}
          </p>
          <p className="font-semibold">Rating: {Rating}</p>
          <p className="font-semibold">Summary: {ShortDescription}</p>
          <p className="font-semibold">
            {" "}
            Content: <span className="italic"> {BookContent}</span>{" "}
          </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="btn btn-neutral"
              disabled={currentQuantity === 0}
            >
              Borrow
            </button>
          </div>
        </div>
      </div>

      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Borrow this book</h3>

          <form onSubmit={handleBorrow} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={name}
                className="input input-bordered"
                required
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
                defaultValue={email}
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Current Date</span>
              </label>
              <input
                type="text"
                placeholder="age-restriction"
                className="input input-bordered"
                name="borrowedDate"
                defaultValue={borrowedDate}
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Return Date</span>
              </label>
              <input
                type="date"
                placeholder="Return Date"
                className="input input-bordered"
                name="returnDate"
              />
            </div>

            <div className="form-control mt-6">
              <div className="modal-action" method="dialog">
                <button type="submit" className="btn btn-neutral">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="modal-action">
            {/* <form method="dialog">
         
              <button className="btn">Close</button>
            </form> */}
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
