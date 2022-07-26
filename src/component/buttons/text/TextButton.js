import React from "react";

const TextButton = ({ text, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="bg-slate-800 px-4 h-12 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mx-4"
    >
      {text}
    </button>
  );
};

export default TextButton;
