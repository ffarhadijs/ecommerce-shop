import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextButton from "../../buttons/text/TextButton";
import Category from "./category/Category";
import Rate from "./rate/Rate";

const FilterPanel = ({ filter, changeHandler, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full">
        <span className=" text-xl font-medium ">Category</span>
        <Category filter={filter} changeHandler={changeHandler} />
      </div>
      <div className="w-full">
        <span className="text-xl font-medium ">Filter By Price</span>
        <Box className="mt-6 mb-10">
          <Slider
            name="price"
            value={filter.price}
            onChange={changeHandler}
            valueLabelDisplay="auto"
            step={50}
            min={0}
            max={300}
          />
        </Box>
      </div>
      <div className="w-full">
        <span className="text-xl font-medium">Filter By Rate</span>
        <Rate filter={filter} changeHandler={changeHandler} />
      </div>
      <div>
        <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
      </div>
    </div>
  );
};

export default FilterPanel;
