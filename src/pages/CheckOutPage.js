import React from "react";
import Billing from "../component/checkOut/Billing";
import Order from "../component/checkOut/Order";
import Shipping from "../component/checkOut/Shipping";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { Link } from "react-router-dom";
const CheckOutPage = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <Link to="/cart" className=" text-gray-600">
          cart
        </Link>
        <span className="px-2">/</span>
        <span className=" text-gray-600"> Check Out</span>
      </div>
      <div className="w-full sm:w-5/6 mx-auto flex flex-col md:flex-row justify-center items-start px-4">
        <div className="w-full md:w-2/3">
          <Billing />
          <Shipping />
        </div>
        <div className="w-full md:w-1/3">
          <Order />
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper(CheckOutPage);
