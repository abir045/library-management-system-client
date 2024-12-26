import React from "react";
import desktop from "../assets/b-desktop.png";
import mobile from "../assets/b-mobile.png";
import d2 from "../assets/desktop-2.png";
import m2 from "../assets/mobile2.png";
import m3 from "../assets/m3.jpg";

const Cloud = () => {
  return (
    <div className="mt-32 max-w-7xl mx-auto px-5">
      <div className="lg:flex lg:items-start gap-10">
        <img className="rounded-xl border border-black " src={d2} alt="" />

        <div>
          <h3 className="text-4xl mt-4  font-bold">
            Cloud Sync keeps your collections updated across multiple devices.
          </h3>
          <p className="text-2xl mt-10">
            Access your collections from anywhere on virtually any device.
          </p>

          <div className="mt-20 px-5">
            <img
              src={m3}
              className="h-1/2 rounded-xl border border-black"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
