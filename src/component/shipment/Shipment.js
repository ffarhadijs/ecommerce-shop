import React from "react";

import { BsBoxSeam } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";

const Shipment = () => {
  return (
    <div className="flex flex-row items-center justify-center py-20 bg-white">
      <div className="text-6xl mx-8">
        <BsBoxSeam className="mx-auto" />
        <span className="text-xl">World Wide Shipment</span>
      </div>
      <div className="text-6xl mx-8">
        <BsCreditCard className="mx-auto" />
        <span className="text-xl">100% Secure Payment</span>
      </div>
      <div className="text-6xl mx-8">
        <BiSupport className="mx-auto" />
        <span className="text-xl">24/7 online Support</span>
      </div>
      <div className="text-6xl mx-8">
        <MdOutlineLocalShipping className="mx-auto" />
        <span className="text-xl">Free Shipment Over 50$</span>
      </div>
    </div>
  );
};

export default Shipment;
