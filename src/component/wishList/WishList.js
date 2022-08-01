import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Remove } from "../../features/wishList/wishSlice";
import { AddToCart } from "../../features/cart/cartSlice";
import TextButton from "../buttons/text/TextButton";
import { FaCartPlus } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const WishList = () => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wish.wishListItems);
  return (
    <div className="px-4">
      <table className=" w-full sm:w-5/6 mx-auto my-12">
        <thead className=" bg-slate-900 text-white">
          <tr>
            <th className="py-2 w-40 sm:w-2/5">Items</th>
            <th className="py-2">Price</th>
            <th className="py-2">Add To Cart</th>
            <th className="py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {wishListItems.map((item) => (
            <tr className=" border-b-2">
              <td className="flex flex-col md:flex-row justify-start items-start md:items-center p-4 text-base sm:text-lg text-gray-600 font-semibold">
                <img src={item.image} className=" w-20 h-auto mx-4" />
                {item.title}
              </td>
              <td className="text-center">
                $
                <span className=" text-slate-900 font-bold text-lg sm:text-xl">
                  {item.price}
                </span>
              </td>
              <td className="text-center">
                <TextButton
                  text={"Add To Cart"}
                  className="mx-0 text-sm sm:text-base px-1 sm:px-4"
                  clickHandler={() => dispatch(AddToCart(item))}
                />
              </td>
              <td className="text-center">
                <TextButton
                  className="mx-0 text-sm sm:text-base px-1 sm:px-4"
                  text={"Remove"}
                  clickHandler={() => dispatch(Remove(item))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-center items-center">
        {wishListItems.length === 0 ? (
          <FaCartPlus className="text-9xl text-slate-800 mb-12" />
        ) : null}
      </div>
    </div>
  );
};

export default WishList;
