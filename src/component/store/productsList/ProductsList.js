import React from "react";
import { shorten } from "../../../helpers/shorten";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../../features/cart/cartSlice";

const ProductsList = (props) => {
  const clickHandler = (item) => {
    props.setItem(item);
    props.setShow(true);
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);

  return (
    <div className=" flex flex-row flex-wrap justify-center mx-auto">
      {props.filteredList.map((item) => (
        <div className=" w-52 bg-gray-100 border m-4 h-96">
          <div className="box relative bg-white w-full h-72 flex flex-col justify-center items-center">
            <img src={item.image} className=" w-3/4 max-h-80" />
            <div className=" tools hidden bg-gray-400 bg-opacity-40 w-full h-full absolute flex-row justify-center items-center ">
              <button
                onClick={() => clickHandler(item)}
                className=" bg-slate-800 w-16 h-16 rounded-full mx-auto flex flex-col justify-center items-center text-white font-medium text-xl cursor-pointer hover:text-slate-900 hover:bg-slate-50"
              >
                <IoEyeOutline />
              </button>
              <div className="bg-slate-800 w-full h-10 absolute bottom-0 left-0 text-white text-center flex flex-row justify-center hover:text-slate-900 hover:bg-slate-50">
                <button
                  onClick={() => dispatch(AddToCart(item))}
                  className=" flex flex-row items-center justify-center"
                >
                  <AiOutlineShoppingCart className="inline mx-2" />
                  <span>Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
          <section className="p-2">
            <Link to={`/shop/${item.id}`}>
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
    </div>
  );
};

export default ProductsList;
