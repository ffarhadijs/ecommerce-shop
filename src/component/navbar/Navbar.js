import React from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { menuList } from "../../data/dummyData";



const Navbar = () => {
  const cart=useSelector(state=>state.cart.cartItems)
  const wishList=useSelector(state=>state.wish.wishListItems)
  
  return (
    <div className=" flex flex-row justify-between items-center p-5 bg-white">
      <Link to="/">
        <img src={logo} alt="site logo"/>
      </Link>
      <div className="flex flex-row items-center">
        <div>
          <ul className="flex flex-row items-center px-5">
            {menuList.map((item) => (
              <Link
                to={item.to}
                key={item.id}
                className="px-1 py-1 mx-2 text-slate-800 font-semibold hover:border-b hover:border-yellow-400 transition duration-500"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex flex-row">
            <li className="p-2 m-1 border rounded-full border-slate-800  text-xl text-gray-500 hover:bg-slate-800 hover:text-gray-50 transition duration-500">
              <AiOutlineUser />
            </li>
            <Link to="/cart" className=" relative p-2 m-1 border rounded-full border-slate-800  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500">
              <AiOutlineShoppingCart />
              <span className="absolute bottom-6 right-5 bg-slate-800 text-gray-50 rounded-full w-5 h-auto text-sm flex justify-center items-center">
                {cart.length}
              </span>
            </Link>
            <Link to="/wishlist" className=" relative p-2 m-1 border rounded-full border-slate-800  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500">
              <AiOutlineHeart />
              <span className="absolute bottom-6 right-5 bg-slate-800 text-gray-50 rounded-full w-5 h-auto text-sm flex justify-center items-center">
                {wishList.length}
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
