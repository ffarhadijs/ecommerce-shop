import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { rateData, categoryData } from "../../../data/dummyData";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { categoryNumber } from "../../../helpers/categoryNumber";

const FilterPanel = ({ filter, changeHandler, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full">
        <span className=" text-xl font-medium ">Category</span>
        <ToggleButtonGroup
          orientation="vertical"
          value={filter.category}
          exclusive
          onChange={changeHandler}
          className="w-full mb-10 mt-6"
        >
          {categoryData.map((item) => (
            <ToggleButton
              value={item.value}
              name="category"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{item.name}</span>
              <span>{categoryNumber(item.value)}</span>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
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
        <ToggleButtonGroup
          orientation="vertical"
          value={filter.rate}
          exclusive
          onChange={changeHandler}
          className="w-full mt-6 mb-10"
        >
          <ToggleButton value={"All"} name="rate">
            All
          </ToggleButton>
          {rateData.map((item) => (
            <ToggleButton value={item.number} name="rate">
              <Rating value={item.number} readOnly />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div>
        <button
          onClick={resetFilters}
          className="bg-slate-800 px-4 h-10 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 mr-2"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
