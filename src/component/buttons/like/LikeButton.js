import React from "react";
import { AddToList } from "../../../features/wishList/wishSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const LikeButton = ({ item }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wish.wishListItems);
  return (
    <button
      onClick={() => dispatch(AddToList(item))}
      className="bg-yellow-300 text-xl px-4 h-10 font-medium text-slate-800 hover:bg-slate-800 hover:text-gray-50 mx-4"
    >
      {wishListItems.find((product) => product.id === item.id) ? (
        <AiFillHeart className="text-red-500" />
      ) : (
        <AiOutlineHeart />
      )}
    </button>
  );
};

export default LikeButton;
