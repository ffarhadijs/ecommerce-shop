import React from "react";
import { AddToList } from "../../../features/wishList/wishSlice";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Tooltip from '@mui/material/Tooltip';

const LikeButton = ({ item }) => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wish.wishListItems);
  return (
    <Tooltip title="Add To Wishlist">
    <button
      onClick={() => dispatch(AddToList(item))}
      className="bg-yellow-300 text-2xl px-4 h-12 font-medium text-slate-800 active:bg-slate-800 active:text-yellow-400 sm:hover:bg-slate-800 sm:hover:text-yellow-400 mx-4 sm:transition-colors sm:duration-300"
    >
      {wishListItems.find((product) => product.id === item.id) ? (
        <AiFillHeart className="text-red-500" />
      ) : (
        <AiOutlineHeart />
      )}
    </button>
    </Tooltip>
  );
};

export default LikeButton;
