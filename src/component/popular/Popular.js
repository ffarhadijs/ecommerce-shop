import React, { useState } from "react";

// Import slider React components
import Slider from "react-slick";

// import css
import "./styles.css";

// import data
import { products } from "../../data/products";

// import functions
import { shorten } from "../../helpers/shorten";

// import icons
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

// import components
import ZoomIn from "../zoomIn/ZoomIn";
import Backdrop from "../zoomIn/Backdrop";

const Popular = () => {
  const [itemId, setItemId] = useState("");
  const [show, setShow] = useState(false);
  const showLargeImage = (item) => {
    setItemId(item.id);
    setShow(true);
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative bg-slate-800 text-white text-center p-10 flex flex-col">
      <span className=" text-3xl font-medium">Popular Products</span>
      <p className=" m-8 italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        maximus vehicula. Sed feugiat, tellus vel tristique posuere, diam
      </p>
      <Slider {...settings}>
        {products
          .filter((item) => item.rating.rate >= 4)
          .map((item) => (
            <div style={{ height: "400px" }} className=" flex flex-col">
              <div className="box relative mb-4 bg-white flex flex-col justify-center items-center border-8 border-slate-900 m-auto w-72 h-72">
                <img src={item.image} className=" overflow-hidden h-auto" />
                <div className=" tools flex-row justify-between border-8 border-slate-900 px-16 text-xl bg-gray-600 w-72 h-72 bg-opacity-70 items-center absolute hidden">
                  <button onClick={() => showLargeImage(item)}>
                    <MdZoomOutMap />
                  </button>
                  <button>
                    <AiOutlineShoppingCart />
                  </button>
                  <button>
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>
              <span className=" text-lg font-semibold mb-2">
                {shorten(item.title)}
              </span>
              <p className=" text-gray-400"> Lorem ipsum dolor sit amet</p>
              <span className=" text-yellow-300 font-semibold mt-2 text-lg">
                {item.price} $
              </span>
            </div>
          ))}
      </Slider>
      {show ? <ZoomIn itemId={itemId} /> : null}
      {show ? <Backdrop setShow={setShow} /> : null}
    </div>
  );
};

export default Popular;
