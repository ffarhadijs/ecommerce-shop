import React from "react";
import { Increase, Decrease, Remove } from "../../features/cart/cartSlice";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux/es/exports";
import TextButton from "../buttons/text/TextButton";
import { FaCartPlus } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="px-4">
      <table className=" w-full sm:w-5/6 mx-auto my-12">
        <thead className=" bg-slate-900 text-white">
          <tr>
            <th className="py-2 w-40 sm:w-2/5">Items</th>
            <th className="py-2">Price</th>
            <th className="py-2 ">Qty</th>
            <th className="py-2 ">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr className=" border-b-2" key={item.id}>
              <td className="flex flex-col md:flex-row justify-start items-start md:items-center p-4 text-base sm:text-lg text-gray-600 font-semibold">
                <img src={item.image} className=" w-20 h-auto sm:mx-4" />
                <span>{item.title}</span>
              </td>
              <td className="text-center w-24">
                $
                <span className=" text-slate-900 font-bold text-lg sm:text-xl">
                  {item.price}
                </span>
              </td>
              <td className="text-center">
                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center">
                  {
                    <Tooltip title="Increase">
                      <button
                        className="bg-slate-800 h-10 font-medium text-white hover:bg-yellow-300 hover:text-slate-800 mx-4 w-10 text-center"
                        onClick={() => dispatch(Increase(item))}
                      >
                        <AiOutlinePlus className="mx-auto" />
                      </button>
                    </Tooltip>
                  }
                  <span className="text-slate-800 text-lg text-semibold">
                  {item.itemQuantity}
                  </span>
                  {item.itemQuantity <= 1 ? (
                    <Tooltip title="Remove">
                      <button
                        className="bg-slate-800 h-10 font-medium text-white hover:bg-yellow-300 hover:text-slate-800 mx-4 w-10 text-center"
                        onClick={() => dispatch(Remove(item))}
                      >
                        <FiTrash2 className="mx-auto" />
                      </button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Decrease">
                      <button
                        className="bg-slate-800 h-10 font-medium text-white hover:bg-yellow-300 hover:text-slate-800 mx-4 w-10 text-center"
                        onClick={() => dispatch(Decrease(item))}
                      >
                        <AiOutlineMinus className="mx-auto" />
                      </button>
                    </Tooltip>
                  )}
                </div>
              </td>
              <td className="text-center">
                $
                <span className=" text-slate-900 font-bold text-lg sm:text-xl">
                  {Number(item.itemTotalPrice).toFixed(2)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex flex-row justify-center items-center">
        {cartItems.length === 0 ? (
          <FaCartPlus className="text-9xl text-slate-800" />
        ) : null}
      </div>
    </div>
  );
};

export default CartItems;
