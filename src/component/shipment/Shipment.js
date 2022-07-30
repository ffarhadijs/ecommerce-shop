import React from "react";

import { BsBoxSeam } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";

const Shipment = () => {
  return (
    <div className="w-full flex flex-row flex-wrap items-center justify-center py-20 bg-white">
      <div className=" text-center w-56 my-4">
        <BsBoxSeam className="mx-auto mb-4 text-6xl" />
        <span className="text-xl">World Wide Shipment</span>
      </div>
      <div className=" text-center w-56 my-4">
        <BsCreditCard className="mx-auto mb-4 text-6xl" />
        <span className="text-xl">100% Secure Payment</span>
      </div>
      <div className=" text-center w-56 my-4">
        <BiSupport className="mx-auto mb-4 text-6xl" />
        <span className="text-xl">24/7 online Support</span>
      </div>
      <div className=" text-center w-56 my-4">
        <MdOutlineLocalShipping className="mx-auto mb-4 text-6xl" />
        <span className="text-xl">Free Shipment Over 50$</span>
      </div>
    </div>
  );
};

export default Shipment;
