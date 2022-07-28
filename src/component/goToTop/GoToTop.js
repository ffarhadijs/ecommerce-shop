import React, { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
const GoToTop = () => {
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleShow = () => {
      if (window.pageYOffset > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", toggleShow);
  }, []);

  return (
    <div>
      {show && (
        <button
          onClick={clickHandler}
          className="bg-yellow-500 hover:bg-yellow-400 text-white text-2xl font-bold flex flex-row justify-center items-center w-10 h-10 p-2 fixed bottom-10 right-10 z-50 "
        >
          <BsArrowUp />
        </button>
      )}
    </div>
  );
};

export default GoToTop;
