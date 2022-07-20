import React from "react";
import { blogsCategory } from "../../../data/dummyData";
import { blogsYear } from "../../../data/dummyData";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { tagsNumber } from "../../../helpers/tagsNumber";
const FilterBlog = ({ changeHandler, filter, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10 pr-8">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full ">
        <span className=" text-xl font-medium ">Search</span>
        <input
          placeholder="Search..."
          type="text"
          onChange={changeHandler}
          name="search"
          value={filter.search}
          className="w-full p-2 border outline-none mb-10 mt-5"
        />
      </div>
      <div className="w-full mb-10">
        <span className=" text-xl font-medium ">Tags</span>
        <ToggleButtonGroup
          orientation="vertical"
          value={filter.tags}
          exclusive
          onChange={changeHandler}
          className="w-full  mt-6"
        >
          {blogsCategory.map((item) => (
            <ToggleButton
              value={item.name}
              name="tags"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{item.name}</span>
              <span>{tagsNumber(item.name)}</span>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
      <div>
        <span className="text-xl font-medium">Filter By Year</span>
        <ToggleButtonGroup
          orientation="vertical"
          value={filter.year}
          exclusive
          onChange={changeHandler}
          className="w-full mt-6 mb-10"
        >
          {blogsYear.map((item) => (
            <ToggleButton value={item.year} name="year">
              <span>{item.year}</span>
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

export default FilterBlog;
