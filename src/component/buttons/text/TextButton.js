import React from "react";

const TextButton = ({ text, clickHandler,className }) => {
  return (
    <button
      onClick={clickHandler}
      className={`bg-slate-800 px-4 h-12 font-medium text-white active:bg-yellow-400 focus:bg-yellow-400 hover:bg-yellow-400 hover:text-slate-800 mx-4 transition-colors duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default TextButton;
