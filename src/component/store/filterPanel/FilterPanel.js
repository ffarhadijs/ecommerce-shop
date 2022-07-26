import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { rateData, categoryData } from "../../../data/dummyData";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { categoryNumber } from "../../../helpers/categoryNumber";
import TextButton from "../../buttons/text/TextButton";
import { rateNumber } from "../../../helpers/rateNumber";
const FilterPanel = ({ filter, changeHandler, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full">
        <span className=" text-xl font-medium ">Category</span>
        <div className="w-full my-4 p-2">
          {categoryData.map((item) => (
            <div className="border " key={item.id}>
              <input
                type="radio"
                name="category"
                value={item.value}
                id={item.name}
                onChange={changeHandler}
                checked={filter.category === item.value}
                className="hidden"
              />
              <label
                htmlFor={item.name}
                className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
              >
                <span>{item.name}</span>
                <span>{categoryNumber(item.value)}</span>
              </label>
            </div>
          ))}
        </div>
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
      <div>
        <span className="text-xl font-medium">Filter By Rate</span>
        <div className="w-full my-4 p-2">
        <div className="border">
              <input
                type="radio"
                name="rate"
                value={"All"}
                id={"all"}
                onChange={changeHandler}
                checked={filter.rate === "All"}
                className="hidden"
              />
              <label
                htmlFor={"all"}
                className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
              >
                <div>
                All
                </div>
                <span>{rateNumber("All")}</span>
              </label>
            </div>
          {rateData.map((item) => (
            <div className="border " key={item.id} >
              <input
                type="radio"
                name="rate"
                value={item.number}
                id={item.string}
                onChange={changeHandler}
                checked={filter.rate === item.value}
                className="hidden"
              />
              <label
                htmlFor={item.string}
                className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
              >
                <div>
                <Rating value={item.number} readOnly />
                </div>
                <span>{rateNumber(item.number)}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
      </div>
    </div>
  );
};

export default FilterPanel;
