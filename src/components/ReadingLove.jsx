import React from "react";
import love from "../assets/love.jpg";

const ReadingLove = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h3 className="text-3xl text-center font-bold">The Joy of Reading</h3>
      <div className="lg:flex mt-10 items-center">
        <div className="px-5 w-3/4 mx-auto mb-4">
          <p>
            There’s something magical about the world of books. With every page
            turned, we embark on journeys to faraway lands, uncover timeless
            wisdom, and connect with the thoughts and emotions of others across
            centuries. Reading is more than a hobby—it's an experience that
            enriches our minds, fuels our imagination, and nurtures our souls.
          </p>

          <p className="mt-4">
            At our online library, we believe in the transformative power of
            reading. Books have the ability to inspire, comfort, and empower.
            Whether it’s a gripping mystery, an enlightening biography, or a
            heartwarming romance, each story has the potential to broaden your
            horizons and touch your heart. Reading doesn’t just entertain; it
            shapes who we are and how we see the world.
          </p>
        </div>

        <div className="px-5">
          <img src={love} className="rounded-xl w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ReadingLove;
