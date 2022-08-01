import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { menuList } from "../../data/dummyData";
import { Tooltip } from "@mui/material";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const wishList = useSelector((state) => state.wish.wishListItems);
  const [show, setShow] = useState(false);
  const showHandler = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  return (
    <div
      onClick={() => setShow(false)}
      className=" max-w-full flex flex-row justify-between items-center p-5 bg-white sticky top-0 left-0 right-0 z-40 shadow-md"
    >
      {/* hamburger menu */}
      <button className="md:hidden " onClick={showHandler}>
        {show ? (
          <IoMdClose className=" text-3xl text-slate-800 transition-opacity duration-1000" />
        ) : (
          <FiMenu className=" text-3xl text-slate-800 transition-opacity duration-1000" />
        )}
      </button>

      {/* logo */}
      <div className="hidden sm:inline">
        <Link to="/">
          <img src={logo} alt="site logo"/>
        </Link>
      </div>

      {/* menu items */}
      <div className="flex flex-row items-center">
        <ul
          className={`${
            show ? `h-52 ` : `h-0 `
          } transition-height duration-300 flex-col w-full absolute top-20 left-0 right-0 flex md:flex-row md:static md:items-center px-5 bg-white shadow-md`}
        >
          {menuList.map((item) => (
            <Link
              to={item.to}
              key={item.id}
              className={`${
                show ? `inline` : `hidden md:inline`
              } md:px-1 md:py-1 py-2 mx-2 text-slate-800 font-semibold hover:border-b hover:border-yellow-400 transition duration-500`}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* btns */}
        <div>
          <ul className="flex flex-row">
            <Tooltip title="Account">
              <li className="p-2 m-1 border rounded-full border-slate-800  text-xl text-gray-500 hover:bg-slate-800 hover:text-gray-50 transition duration-500">
                <AiOutlineUser />
              </li>
            </Tooltip>
            <Tooltip title="Shopping Cart">
              <Link
                to="/cart"
                className=" relative p-2 m-1 border rounded-full border-slate-800  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500"
              >
                <AiOutlineShoppingCart />
                <span className="absolute bottom-6 right-5 bg-slate-800 text-gray-50 rounded-full w-5 h-auto text-sm flex justify-center items-center">
                  {cart.length}
                </span>
              </Link>
            </Tooltip>
            <Tooltip title="Wish List">
              <Link
                to="/wishlist"
                className=" relative p-2 m-1 border rounded-full border-slate-800  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500"
              >
                <AiOutlineHeart />
                <span className="absolute bottom-6 right-5 bg-slate-800 text-gray-50 rounded-full w-5 h-auto text-sm flex justify-center items-center">
                  {wishList.length}
                </span>
              </Link>
            </Tooltip>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
