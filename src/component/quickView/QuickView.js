import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../features/cart/cartSlice";
import LikeButton from "../buttons/like/LikeButton";
import TextButton from "../buttons/text/TextButton";
const QuickView = ({ item, setIsModalOpen }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className="flex justify-center items-center fixed inset-0 bg-gray-700 bg-opacity-60 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ height: "500px" }}
        className="modalContent relative flex items-center justify-center flex-col md:flex-row text-black z-50 w-3/4 md:w-2/3 border rounded-md bg-gray-200 py-5 px-4"
      >
        <div className="lg:w-1/2 md:w-2/5 w-full h-1/2 sm:h-2/5 md:h-full bg-white flex flex-row justify-center items-center p-2">
          <img src={item.image} className=" w-auto max-h-full" alt="item img" />
        </div>
        <div className="flex flex-col justify-between md:w-3/5 lg:w-1/2 w-full h-1/2 sm:h-3/5 md:h-full py-5 px-6 bg-white">
          <div>
            <span className=" font-medium text-xl md:text-xl sm:text-base block">{item.title}</span>
            <span className=" block font-medium text-gray-700 py-4 sm:py-1 md:py-4">
              {item.category}
            </span>
            <span className=" sm:block hidden sm:text-sm md:text-base">{item.description}</span>
          </div>
          <div className="flex flex-row py-4 items-center justify-center mx-auto">
            <TextButton
              text={"Add To Cart"}
              clickHandler={() => dispatch(AddToCart(item))}
            />
            <LikeButton item={item} />
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-0.5 right-0.5 text-2xl text-gray-500 hover:text-black transition-colors duration-500 "
        >
          <AiOutlineCloseCircle />
        </button>
      </div>
    </div>
  );
};

export default QuickView;
