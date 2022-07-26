import React from "react";
import banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import TextButton from "../buttons/text/TextButton";
const Slider = () => {
  return (
    <div>
      <img alt="banner img" src={banner} className="relative w-screen h-auto" />
      <span className=" text-4xl text-slate-800 absolute top-60 right-36 font-semibold">
        Best Models For Summer 2022
      </span>
      <span className=" text-7xl text-slate-800 absolute top-80 right-40 font-extrabold">
        look hot with<br></br> 2018 style
      </span>
      <Link to="/shop" className="absolute right-80" style={{ top: "550px" }}>
        <TextButton text={"SHOP NOW"} />
      </Link>
    </div>
  );
};

export default Slider;
