import React, { useState } from "react";
import { shorten } from "../../../helpers/shorten";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../features/cart/cartSlice";
import QuickView from "../../quickView/QuickView";
import { CSSTransition } from "react-transition-group";
import Tooltip from "@mui/material/Tooltip";

const ProductsList = (props) => {
  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = (item) => {
    setItem(item);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {props.filteredList.map((item) => (
        <div
          className="product min-w bg-gray-100 border h-96 "
          key={item.id}
        >
          <div className="box relative bg-white w-full h-72 flex flex-col justify-center items-center">
            <img
              src={item.image}
              className=" w-3/4 max-h-72"
              alt={item.title}
            />
            <div className=" tools w-full h-full absolute flex flex-row justify-center items-center">
              <Tooltip title="Quick View">
                <button
                  onClick={() => clickHandler(item)}
                  className="  bg-slate-800 w-16 h-16 rounded-full mx-auto flex flex-col justify-center items-center text-white font-medium text-xl cursor-pointer hover:text-slate-900 hover:bg-slate-50 duration-500"
                >
                  <IoEyeOutline />
                </button>
              </Tooltip>
              <button
                onClick={() => dispatch(AddToCart(item))}
                className=" flex flex-row items-center justify-center bg-slate-800 w-full h-10 absolute bottom-0 left-0 text-gray-50 text-center hover:text-slate-900 hover:bg-slate-50 transition-colors duration-500"
              >
                <AiOutlineShoppingCart className="inline mx-2" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
          <section className="p-2 max-h-32 h-16">
            <Link to={`${item.id}`}>
              <span className=" block font-semibold pb-2">
                {shorten(item.title)}
              </span>
              <div className="flex flex-row items-center">
                <span className="text-xs font-semibold">
                  {item.rating.rate}
                </span>
                <Rating
                  key={item.id}
                  name="half-rating-read"
                  defaultValue={item.rating.rate}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                <span className="text-xs font-semibold">
                  by: {item.rating.count}
                </span>
              </div>
              <span className=" font-semibold block">$ {item.price}</span>
            </Link>
          </section>
        </div>
      ))}

      <CSSTransition
        in={isModalOpen}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <QuickView setIsModalOpen={setIsModalOpen} item={item} />
      </CSSTransition>
    </div>
  );
};

export default ProductsList;
