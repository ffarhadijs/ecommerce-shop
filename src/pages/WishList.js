import React from "react";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../features/cart/cartSlice";
import { Remove } from "../features/wishList/wishSlice";
import { Link } from "react-router-dom";
import TextButton from "../component/buttons/text/TextButton";

const WishList = () => {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wish.wishListItems);
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Wish List</span>
      </div>
      <table className=" table-fixed w-5/6 mx-auto my-12">
        <thead className=" bg-slate-900 text-white">
          <tr>
            <th className="py-2 w-2/5">Items</th>
            <th className="py-2">Price</th>
            <th className="py-2">Add To Cart</th>
            <th className="py-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {wishListItems.map((item) => (
            <tr className=" border-b-2">
              <td className="flex flex-row justify-start items-center p-4 text-lg text-gray-600 font-semibold">
                <img src={item.image} className=" w-20 h-auto mx-4" />
                {item.title}
              </td>
              <td className="text-center">
                $
                <span className=" text-slate-900 font-bold text-xl">
                  {item.price}
                </span>
              </td>
              <td className="text-center">
                <TextButton
                  text={"Add To Cart"}
                  clickHandler={() => dispatch(AddToCart(item))}
                />
              </td>
              <td className="text-center">
                <TextButton
                  text={"Remove"}
                  clickHandler={() => dispatch(Remove(item))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LayoutWrapper(WishList);
