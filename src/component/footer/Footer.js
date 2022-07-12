import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className=" bg-slate-900 py-10 px-28 text-gray-400 flex flex-row columns-3 justify-between">
      <div className=" flex flex-col">
        <div className="p-4 ">
          <img src={logo} className=" w-40 h-auto pb-4 mx-auto text-center" />
        </div>
        <div className="flex flex-row justify-start items-center p-4">
          <div className="pr-4 text-xl">
            <MdOutlineLocationOn />
          </div>
          <p>Street No. 12, Newyork 12, USA</p>
        </div>
        <div className="flex flex-row justify-start items-center p-4">
          <div className="pr-4 text-xl">
            <FiPhone />
          </div>
          <div className="flex flex-col">
            <p className="pb-2">1.800.123.456789</p>
            <p>1.800.123.456789</p>
          </div>
        </div>
        <div className="flex flex-row justify-start items-center p-4">
          <div className="pr-4 text-xl">
            <MdOutlineMail />
          </div>
          <div className="flex flex-col">
            <p className="pb-2">info@BoShop.com</p>
            <p>contact@BoShop.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" pt-4 pb-12">
          <span className=" text-xl font-semibold text-white">Links</span>
        </div>
        <div className="flex flex-col ">
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Home
          </a>
          <a className="py-2  hover:text-white hover:scale-105 transition-all duration-500">
            Shop
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Blog
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            About
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Contact
          </a>
        </div>
      </div>
      <div className="flex flex-col">
        <div className=" pt-4 pb-12">
          <span className=" text-xl font-semibold text-white">
            Account Info
          </span>
        </div>
        <div className="flex flex-col ">
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Products
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Find a Store
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Features
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Privacy Policy
          </a>
          <a className="py-2 hover:text-white hover:scale-105 transition-all duration-500">
            Press Kit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
