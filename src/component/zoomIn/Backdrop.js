import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => props.setShow(false)}
      className=" fixed top-0 left-0 h-screen w-full bg-gray-600 bg-opacity-50 z-40 "
    ></div>
  );
};

export default Backdrop;
