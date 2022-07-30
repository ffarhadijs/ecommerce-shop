import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div
      className="banner w-full bg-right bg-contain bg-no-repeat bg-slate-100 py-8 px-5 sm:py-16 sm:px-10 text-center md:text-start"
    >

        <h1 className="sm:text-4xl text-3xl text-slate-700 font-semibold py-8">
          Best Models For Summer 2022
        </h1>
        <h1 className=" text-6xl sm:text-7xl text-slate-700 font-extrabold">
          look hot with<br></br> 2022 style
        </h1>

        <Link to="/shop">
          <button className=" mt-16 bg-yellow-400 text-slate-800 hover:bg-slate-800 hover:text-white px-5 py-3 text-xl font-semibold transition-colors duration-300">
            SHOP NOW
          </button>
        </Link>

    </div>
  );
};

export default Slider;
