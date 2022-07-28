import React from "react";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { Link } from "react-router-dom";
import WishList from "../component/wishList/WishList";


const WishListPage = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Wish List</span>
      </div>
      <WishList/>
    </div>
  );
};

export default LayoutWrapper(WishListPage);
