import React from "react";
import { Increase, Decrease, Remove } from "../../features/cart/cartSlice";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux/es/exports";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div>
      <table className=" table-fixed w-5/6 mx-auto my-12">
        <thead className=" bg-slate-900 text-white">
          <tr>
            <th className="py-2 w-2/5">Items</th>
            <th className="py-2">Price</th>
            <th className="py-2">Qty</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
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
                <div>
                  {item.itemQuantity <= 1 ? (
                    <button
                      onClick={() => dispatch(Remove(item))}
                      className="bg-slate-800 px-4 h-10 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mx-4"
                    >
                      <FiTrash2 />
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(Decrease(item))}
                      className="bg-slate-800 px-4 h-10 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mx-4"
                    >
                      -
                    </button>
                  )}

                  {item.itemQuantity}
                  <button
                    onClick={() => dispatch(Increase(item))}
                    className="bg-slate-800 px-4 h-10 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mx-4"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-center">
                $
                <span className=" text-slate-900 font-bold text-xl">
                  {item.itemTotalPrice}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
