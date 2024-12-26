import React from "react";
import test1 from "../assets/testimonial1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";
import test5 from "../assets/test5.jpg";
import test6 from "../assets/test6.jpg";

const Review = () => {
  return (
    <div className="px-5">
      <h2 className="text-3xl font-bold text-center my-20">
        Words from our Clients
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-6">
        <div className="flex gap-4 items-start">
          <img className="rounded-full w-44 h-44" src={test4} alt="" />

          <div>
            <p>
              "I love this online book library! It has an amazing collection of
              books across every genre imaginable. The user interface is simple
              and intuitive, making it easy to find what I’m looking for. Plus,
              the recommendations are spot on—I’ve discovered so many new
              favorites. Highly recommend for any book lover!"
            </p>
            <p className="mt-4">— Emily T., Avid Reader</p>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <img className="rounded-full w-40" src={test3} alt="" />

          <div>
            <p>
              "As a student, this platform has been a lifesaver! The academic
              resources and textbooks are comprehensive, and the ability to
              access everything digitally is incredibly convenient. The
              affordable subscription plans are a huge bonus too!"
            </p>
            <p className="mt-4">— James R., College Student</p>
          </div>
        </div>

        {/* 3rd review */}

        <div className="flex gap-4 items-start mt-8">
          <img className="rounded-full w-40 h-40" src={test5} alt="" />

          <div>
            <p>
              "I appreciate how well-organized this online library is. The
              collection is vast, and I can borrow or read books with just a few
              clicks. The mobile app could use a bit of improvement, but
              overall, it’s been a fantastic experience!"
            </p>
            <p className="mt-4">— Sophia L., Book Enthusiast</p>
          </div>
        </div>

        {/* 4th review */}

        <div className="flex gap-4 items-start mt-8">
          <img className="rounded-full w-40 h-40" src={test6} alt="" />

          <div>
            <p>
              "This is hands down the best online library I’ve used! The
              audiobooks feature is a game changer, especially for someone like
              me who’s always on the go. I also love how frequently they update
              the catalog with new releases."
            </p>
            <p className="mt-4">— Michael P.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
