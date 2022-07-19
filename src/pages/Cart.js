import React from "react";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { Link } from "react-router-dom";
import CartItems from "../component/cartItems/CartItems";
import Discound from "../component/discound/Discound";

const Cart = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <Link to="/shop" className=" text-gray-600 ">
          shop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Cart</span>
      </div>
      <CartItems />
      <Discound />
    </div>
  );
};

export default LayoutWrapper(Cart);
