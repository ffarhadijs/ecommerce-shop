import React, { useState } from "react";

// Import slider React components
import Slider from "react-slick";

// import data
import { products } from "../../data/products";

// import functions
import { shorten } from "../../helpers/shorten";

// import icons
import { MdZoomOutMap } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

// import components
import Modal from "../modal/Modal";

// import redux
import { useDispatch, useSelector } from "react-redux";

// import cart features
import { AddToCart } from "../../features/cart/cartSlice";
import { AddToList } from "../../features/wishList/wishSlice";

import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Tooltip from "@mui/material/Tooltip";

const Popular = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState("");

  const showLargeImage = (item) => {
    setItemId(item.id);
    setIsModalOpen(true);
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
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wish.wishListItems);
  return (
    <div className="relative bg-slate-900 text-white text-center p-10 flex flex-col">
      <span className=" text-3xl font-medium">Popular Products</span>
      <p className=" m-8 italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        maximus vehicula. Sed feugiat, tellus vel tristique posuere, diam
      </p>
      <Slider {...settings}>
        {products
          .filter((item) => item.rating.rate >= 4)
          .map((item) => (
            <div
              style={{ height: "400px" }}
              className=" flex flex-col"
              key={item.id}
            >
              <div className="box relative mb-4 bg-white flex flex-col justify-center items-center border-8 border-slate-900 m-auto w-72 h-72">
                <img
                  alt="item img"
                  src={item.image}
                  className=" overflow-hidden h-auto bg-slate-900"
                />
                <div className=" tools flex flex-row justify-between border-8 border-slate-900 px-16 text-2xl w-72 h-72 items-center absolute">
                  <Tooltip title="Enlarge Image">
                    <button
                      onClick={() => showLargeImage(item)}
                      className="hover:scale-125 hover:text-yellow-300 transition-all"
                    >
                      <MdZoomOutMap />
                    </button>
                  </Tooltip>

                  <Tooltip title="Add To Cart">
                    <button
                      onClick={() => dispatch(AddToCart(item))}
                      className="hover:scale-125 hover:text-yellow-300 transition-all"
                    >
                      <AiOutlineShoppingCart />
                    </button>
                  </Tooltip>

                  {wishListItems.find((product) => product.id === item.id) ? (
                    <Tooltip title="Remove From Wishlist">
                      <button
                        onClick={() => dispatch(AddToList(item))}
                        className="hover:scale-125 hover:text-yellow-300 transition-all"
                      >
                        <AiFillHeart className="text-red-500" />
                      </button>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Add To Wishlist">
                      <button
                        onClick={() => dispatch(AddToList(item))}
                        className="hover:scale-125 hover:text-yellow-300 transition-all"
                      >
                        <AiOutlineHeart />
                      </button>
                    </Tooltip>
                  )}
                </div>
              </div>
              <Link to={`shop/${item.id}`}>
                <span className=" text-lg font-semibold mb-2">
                  {shorten(item.title)}
                </span>
                <p className=" text-gray-400"> Lorem ipsum dolor sit amet</p>
                <span className=" text-yellow-300 font-semibold mt-2 text-lg">
                  <sup>$</sup> {item.price}
                </span>
              </Link>
            </div>
          ))}
      </Slider>
      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <Modal setIsModalOpen={setIsModalOpen} itemId={itemId} />
      </CSSTransition>
    </div>
  );
};

export default Popular;
