import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const {
    Image,
    Name,
    AuthorName,
    Category,
    Quantity,
    Rating,
    ShortDescription,
    BookContent,
  } = data;

  console.log(data);
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
            <button className="btn btn-neutral">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

// import React, { useState } from 'react';
// import { useLoaderData } from "react-router-dom";

// const BookDetails = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookQuantity, setBookQuantity] = useState(0);
//   const data = useLoaderData();

//   const {
//     Image,
//     Name,
//     AuthorName,
//     Category,
//     Quantity,
//     Rating,
//     ShortDescription,
//     BookContent,
//   } = data;

//   const userEmail = "user@example.com";
//   const userName = "John Doe";

//   const handleBorrow = (e) => {
//     e.preventDefault();
//     const returnDate = e.target.returnDate.value;
//     setBookQuantity(prev => Math.max(0, prev - 1));

//     const borrowData = {
//       bookName: Name,
//       userEmail,
//       userName,
//       returnDate,
//       borrowDate: new Date().toISOString()
//     };

//     console.log('Borrow data:', borrowData);
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h2 className="text-center text-3xl my-10">Book Details</h2>

//       <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//         <img src={Image} alt={Name} className="w-full h-48 object-cover" />
//         <div className="p-6">
//           <h2 className="text-xl font-bold mb-2">{Name}</h2>
//           <p className="mb-2">by - <span className="font-semibold">{AuthorName}</span></p>
//           <p className="font-semibold mb-2">Category: <span>{Category}</span></p>
//           <p className="font-semibold mb-2">Quantity: <span>{Quantity}</span></p>
//           <p className="font-semibold mb-2">Rating: {Rating}</p>
//           <p className="font-semibold mb-2">Summary: {ShortDescription}</p>
//           <p className="font-semibold mb-2">Content: <span className="italic">{BookContent}</span></p>
//           <div className="text-right">
//             <button
//               className={`px-4 py-2 rounded ${Quantity === 0
//                 ? 'bg-gray-300 cursor-not-allowed'
//                 : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
//               onClick={() => setIsModalOpen(true)}
//               disabled={Quantity === 0}
//             >
//               Borrow
//             </button>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-lg font-bold mb-4">Borrow Book</h3>
//             <form onSubmit={handleBorrow} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Name</label>
//                 <input
//                   type="text"
//                   value={userName}
//                   disabled
//                   className="w-full p-2 border rounded bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Email</label>
//                 <input
//                   type="email"
//                   value={userEmail}
//                   disabled
//                   className="w-full p-2 border rounded bg-gray-100"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-1">Return Date</label>
//                 <input
//                   type="date"
//                   name="returnDate"
//                   required
//                   className="w-full p-2 border rounded"
//                   min={new Date().toISOString().split('T')[0]}
//                 />
//               </div>
//               <div className="flex gap-2 justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-4 py-2 border rounded hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//                 >
//                   Confirm Borrow
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
