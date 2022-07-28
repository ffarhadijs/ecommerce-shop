import React, { useState } from "react";
import { shorten } from "../../../helpers/shorten";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../features/cart/cartSlice";
import QuickView from "../../quickView/QuickView";
import { CSSTransition } from "react-transition-group";
const ProductsList = (props) => {
  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = (item) => {
    setItem(item);
    setIsModalOpen(true);
  };
  const dispatch = useDispatch();

  return (
    <div className=" flex flex-row flex-wrap justify-start">
      {props.filteredList.map((item) => (
        <div className="product w-52 bg-gray-100 border m-4 h-96 transition-all duration-500" key={item.id}>
          <div className="box relative bg-white w-full h-72 flex flex-col justify-center items-center">
            <img src={item.image} className=" w-3/4 max-h-80" alt="item img"/>
            <div className=" tools w-full h-full absolute flex flex-row justify-center items-center">
              <button
                onClick={() => clickHandler(item)}
                className="  bg-slate-800 w-16 h-16 rounded-full mx-auto flex flex-col justify-center items-center text-white font-medium text-xl cursor-pointer hover:text-slate-900 hover:bg-slate-50 duration-500"
              >
                <IoEyeOutline />
              </button>
              <button
                onClick={() => dispatch(AddToCart(item))}
                className=" flex flex-row items-center justify-center bg-slate-800 w-full h-10 absolute bottom-0 left-0 text-gray-50 text-center hover:text-slate-900 hover:bg-slate-50 transition-colors duration-500"
              >
                <AiOutlineShoppingCart className="inline mx-2" />
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
          <section className="p-2">
            <Link to={`${item.id}`}>
              <span className=" block font-semibold pb-2">
                {shorten(item.title)}
              </span>
              <Stack
                spacing={1}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {item.rating.rate}
                <Rating
                  key={item.id}
                  name="half-rating-read"
                  defaultValue={item.rating.rate}
                  precision={0.1}
                  size="small"
                  readOnly
                />
                by: {item.rating.count}
              </Stack>
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
