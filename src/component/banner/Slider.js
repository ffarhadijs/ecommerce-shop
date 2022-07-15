import React from "react";
import banner from "../../assets/banner.jpg";

const Slider = () => {
  return (
    <div>
      <img src={banner} className="relative w-screen h-auto" />
      <span className=" text-4xl text-slate-800 absolute top-60 right-36 font-semibold">
        Best Models For Summer 2022
      </span>
      <span className=" text-7xl text-slate-800 absolute top-80 right-40 font-extrabold">
        look hot with<br></br> 2018 style
      </span>
      <button
        className=" absolute right-80 bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800"
        style={{ top: "550px" }}
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default Slider;
