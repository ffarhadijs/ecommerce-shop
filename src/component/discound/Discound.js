import React from "react";
import { useSelector } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import TextButton from "../buttons/text/TextButton";
const Discound = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  
  return (
    <div className="bg-gray-100 py-10 mt-12">
      <div className=" w-full sm:w-5/6 mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="w-full sm:w-5/6 lg:w-1/2 flex flex-col justify-center items-start mx-2 my-6 px-4 sm:px-0">
          <span className="text-xl font-semibold text-slate-800 border-b-4 border-yellow-400 pb-2 mb-16 ">
            Discount Code
          </span>
          <div className="flex flex-row justify-center item-center bg-gray-200 px-5 py-14 w-full">
            <input
              className=" border w-full px-3"
              type="text"
              placeholder="Enter Your Code If you Have One"
            />
            <TextButton text={"Apply Code"} className="mx-0 w-40" />
          </div>
          <div className="flex flex-row justify-between item-center mt-14 ">
            <TextButton text={"Update Cart"} />
            <TextButton text="Continue Shopping" />
          </div>
        </div>

        <div className="w-full sm:w-5/6 lg:w-1/2 flex flex-col justify-start items-start mx-2 my-6 px-4 sm:px-0">
          <span className="text-xl font-semibold text-slate-800 border-b-4 border-yellow-400 pb-2 mb-16 ">
            Grand Total
          </span>
          <div className=" w-full h-auto border-2 border-slate-800 flex flex-col justify-center items-start p-4 bg-white">
            {cartItems.map((product) => (
              <div className="flex flex-row justify-between items-center w-full border-b-2 py-3" key={product.id}>
                <span>{product.title}</span>
                <span className="px-2">{product.itemTotalPrice}</span>
              </div>
            ))}
            <div className="flex flex-row justify-between items-center w-full py-3">
              <span className="text-lg font-semibold text-slate-800">
                Total: {totalQuantity}
              </span>
              <span className="text-lg font-semibold text-slate-800">
                $ {Number(totalAmount).toFixed(2)}
              </span>
            </div>
            <Link to="checkout" className=" mx-auto">
              <TextButton text={"Proceed To CheckOut"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discound;
