import React from "react";
import TextButton from "../../buttons/text/TextButton";
import Search from "./search/Search";
import Tags from "./tags/Tags";
import Year from "./year/Year";

const FilterBlog = ({ changeHandler, filter, resetFilters }) => {
  return (
    <div className="flex flex-col bg-gray-50 pt-10 sm:pr-8 w-full">
      <span className=" text-2xl font-medium pb-5">Filter Panel</span>
      <div className="w-full ">
        <span className=" text-xl font-medium ">Search</span>
        <Search changeHandler={changeHandler} filter={filter} />
      </div>
      <div className="w-full mb-10">
        <span className=" text-xl font-medium ">Tags</span>
        <Tags changeHandler={changeHandler} filter={filter} />
      </div>
      <div className="w-full mb-10">
        <span className="text-xl font-medium">Filter By Year</span>
        <Year changeHandler={changeHandler} filter={filter} />
      </div>
      <div>
        <TextButton text={"Reset Filters"} clickHandler={resetFilters} />
      </div>
    </div>
  );
};

export default FilterBlog;
