import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";

const Discound = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  
  return (
    <div className="bg-gray-100 py-20">
      <div className=" w-5/6 mx-auto flex flex-row justify-center items-start">
        <div className=" w-1/2 flex flex-col justify-center items-start ">
          <span className="text-xl font-semibold text-slate-800 border-b-4 border-yellow-400 pb-2 mb-24 ">
            Discound Code
          </span>
          <div className="flex flex-row justify-center item-center bg-gray-200 px-12 py-14">
            <input
              className=" border w-80 px-3"
              type="text"
              placeholder="Enter Your Code If you Have One"
            />
            <button className=" bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800">
              Apply Code
            </button>
          </div>
          <div className="flex flex-row justify-between item-center mt-14 w-96">
            <button className=" bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800">
              Update Cart
            </button>
            <button className=" bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800">
              Continue Shopping
            </button>
          </div>
        </div>

        <div className=" w-1/2 flex flex-col justify-start items-start mx-4">
          <span className="text-xl font-semibold text-slate-800 border-b-4 border-yellow-400 pb-2 mb-24 ">
            Grand Total
          </span>
          <div className=" w-full h-auto border-2 border-slate-800 flex flex-col justify-center items-start p-4 bg-white">
            {cartItems.map((product) => (
              <div className="flex flex-row justify-between items-center w-full border-b-2 py-3">
                <span>{product.title}</span>
                <span>{product.itemTotalPrice}</span>
              </div>
            ))}
            <div className="flex flex-row justify-between items-center w-full py-3">
              <span className="text-lg font-semibold text-slate-800">
                Total: {totalQuantity}
              </span>
              <span className="text-lg font-semibold text-slate-800">
                $ {totalAmount}
              </span>
            </div>
            <button className=" bg-slate-800 py-3 px-4 w-full font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800">
              Proceed To CheckOut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discound;
