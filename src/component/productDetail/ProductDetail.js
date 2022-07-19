import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetail = () => {
  const id = useParams().id;
  const productId = id - 1;
  const product = products[productId];

  return (
    <div>
      <div className="flex flex-row p-6 justify-center items-start">
        <div className=" w-1/2 p-6 flex flex-row justify-center items-center">
          <div className=" w-3/4 h-96 ">
            <img src={product.image} className=" w-auto h-full mx-auto" />
          </div>
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-between items-center">
          <div>
            <p className=" py-4 text-2xl font-semibold text-black ">
              {product.title}
            </p>
            <Stack
              spacing={1}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Rating
                key={product.id}
                name="half-rating-read"
                defaultValue={product.rating.rate}
                precision={0.1}
                size="small"
                readOnly
              />
            </Stack>
            <div className="py-3">
              <span className=" text-gray-600 font-semibold">Category: </span>
              <span className="font-semibold text-black">
                {product.category}
              </span>
            </div>
            <p className="font-bold text-slate-900 text-xl pb-3">
              <sup>$</sup>
              {product.price}
            </p>
            <p>{product.description}</p>
          </div>

          <div className="flex flex-row justify-center items-center pt-10">
            <button className=" bg-slate-800 py-2 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800">
              Add to Cart
            </button>
            <button className="bg-yellow-300 h-10 px-6 font-medium text-slate-800 hover:bg-slate-800 hover:text-gray-50 ml-2">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
