import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const QuickView = (props) => {
  return (
    <div
      style={{ height: "500px" }}
      className=" fixed top-16 left-1/4 w-1/2 border rounded-md bg-gray-200 flex flex-row justify-center items-center z-50 p-5"
    >
      <div className="w-1/2 h-full bg-white flex flex-row justify-center items-center p-2">
        <img src={props.item.image} className=" w-auto max-h-full" />
      </div>
      <div className="flex flex-col justify-between w-1/2 h-full py-5 px-6 bg-white">
        <div>
          <span className=" font-medium text-xl block">{props.item.title}</span>
          <span className=" block font-medium text-gray-700 py-4">
            {props.item.category}
          </span>
          <span className=" block">{props.item.description}</span>
        </div>
        <div className="flex flex-row p-4 items-center justify-center mx-auto">
          <button className="bg-slate-800 px-4 h-10 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mr-2">
            Add To Cart
          </button>
          <button className="bg-yellow-300 h-10 px-6 font-medium text-slate-800 hover:bg-slate-800 hover:text-gray-50 ml-2">
            <AiOutlineHeart />
          </button>
        </div>
      </div>
      <button
        onClick={() => props.setShow(false)}
        className="absolute top-0.5 right-0.5 text-2xl text-gray-500 hover:text-black transition-colors duration-500 "
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export default QuickView;
