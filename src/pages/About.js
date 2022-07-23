import React from "react";
import CountUp from "../component/counUp/Countup";
import HistoryAbout from "../component/historyAbout/HistoryAbout";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import Team from "../component/team/Team";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> About</span>
      </div>
      <HistoryAbout />
      <Team />
      <CountUp />
    </div>
  );
};

export default LayoutWrapper(About);
