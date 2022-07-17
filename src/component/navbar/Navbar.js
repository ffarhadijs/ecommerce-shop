import React from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    { name: "HOME", id: "1", to: "/" },
    { name: "SHOP", id: "2", to: "/shop" },
    { name: "BLOG", id: "3", to: "/blog" },
    { name: "ABOUT", id: "4", to: "/about" },
    { name: "CONTACT", id: "5", to: "/contact" },
  ];

  return (
    <div className=" flex flex-row justify-between items-center p-5">
      <div>
        <img src={logo} />
      </div>
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
            <li className=" relative p-2 m-1 border rounded-full border-slate-800  hover:bg-slate-800 hover:text-gray-50 text-xl text-gray-500 transition duration-500">
              <AiOutlineShoppingCart className=" " />
              <span className="absolute bottom-6 right-5 bg-slate-800 text-gray-50 rounded-full w-5 h-auto text-sm flex justify-center items-center">
                2
              </span>
            </li>
            <li className="p-2 m-1 border rounded-full border-slate-800  text-xl text-gray-500 hover:bg-slate-800 hover:text-gray-50 transition duration-500">
              <AiOutlineSearch />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;