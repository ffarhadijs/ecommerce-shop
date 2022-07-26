import React from "react";
import { Increase, Decrease, Remove } from "../../features/cart/cartSlice";
import { FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux/es/exports";
import TextButton from "../buttons/text/TextButton";

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
                    <TextButton
                      text={<FiTrash2 />}
                      clickHandler={() => dispatch(Remove(item))}
                    />
                  ) : (
                    <TextButton
                      text={"-"}
                      clickHandler={() => dispatch(Decrease(item))}
                    />
                  )}
                  {item.itemQuantity}

                  {
                    <TextButton
                      text={"+"}
                      clickHandler={() => dispatch(Increase(item))}
                    />
                  }
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
