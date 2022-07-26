import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Rating from "@mui/material/Rating";
import { rateData, categoryData } from "../../../data/dummyData";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { categoryNumber } from "../../../helpers/categoryNumber";
import TextButton from "../../buttons/text/TextButton";

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
            key={item.id}
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
            <ToggleButton value={item.number} name="rate" key={item.id}>
              <Rating value={item.number} readOnly />
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div>
        <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
      </div>
    </div>
  );
};

export default FilterPanel;
