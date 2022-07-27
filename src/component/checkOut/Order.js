import React from "react";
import { useSelector } from "react-redux";
import { shorten } from "../../helpers/shorten";
import { useFormik } from "formik";
import TextButton from "../buttons/text/TextButton";

const Order = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const formik = useFormik({
    initialValues: {
      paymentMethod: "direct",
      accept: false,
    },
  });

  return (
    <div className="p-4 w-full">
      <h1 className="text-slate-800 text-2xl font-bold my-6">Your Order</h1>
      <div className="border border-slate-800 py-6 px-4 flex flex-col justify-center items-start w-full">
        {items.map((item) => (
          <div className=" border-b-2 border-gray-200 py-2 w-full flex flex-row justify-between text-gray-700">
            <span>{shorten(item.title)}</span>
            <span>$ {item.price}</span>
          </div>
        ))}
        <div className=" border-b-2 border-gray-200 py-2 w-full flex flex-row justify-between text-gray-700 font-bold">
          <span>TOTAL COST</span>
          <span>$ {totalAmount}</span>
        </div>
        <form className=" py-4 text-gray-600 text-sm">
          <div className="flex flex-row justify-start items-center py-3">
            <input
              type="radio"
              value="direct"
              checked={formik.values.paymentMethod === "direct"}
              onChange={formik.handleChange}
              name="paymentMethod"
              id="direct"
            />
            <label htmlFor="direct" className="px-2">
              DIRECT BANK TRANSFER
            </label>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              erat turpis, pellentesque non leo eget, pulvinar pretium arcu.
              Mauris porta elit non.
            </p>
          </div>
          <div className="flex flex-row justify-start items-center py-3">
            <input
              type="radio"
              value="cash"
              checked={formik.values.paymentMethod === "cash"}
              onChange={formik.handleChange}
              name="paymentMethod"
              id="cash"
            />
            <label htmlFor="cash" className="px-2 cursor-pointer">
              CASH ON DELIVERY
            </label>
          </div>
          <div className="flex flex-row justify-start items-center py-3">
            <input
              type="radio"
              value="cheque"
              checked={formik.values.paymentMethod === "cheque"}
              onChange={formik.handleChange}
              name="paymentMethod"
              id="cheque"
            />
            <label htmlFor="cheque" className="px-2">
              CHEQUE PAYMENT
            </label>
          </div>
          <div className="flex flex-row justify-start items-center py-3">
            <input
              type="radio"
              value="paypal"
              checked={formik.values.paymentMethod === "paypal"}
              onChange={formik.handleChange}
              name="paymentMethod"
              id="paypal"
            />
            <label htmlFor="paypal" className="px-2">
              PAYPAL
            </label>
          </div>
          <div className="flex flex-row justify-start items-center py-3 text-xs">
            <input
              type="checkbox"
              value={!formik.values.accept}
              onChange={formik.handleChange}
              name="accept"
              id="accept"
            />
            <label htmlFor="accept" className="px-2">
              I’VE READ AND ACCEPT THE
              <span className="text-red-500 cursor-pointer">
                {" "}
                TERMS & CONDITIONS
              </span>
            </label>
          </div>
          <div className="flex flex-row justify-end mt-6">
            <TextButton text="Place Order" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
