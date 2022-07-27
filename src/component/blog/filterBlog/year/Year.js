import React from "react";
import { tagsNumber } from "../../../../helpers/tagsNumber";
import { blogsYear } from "../../../../data/dummyData";
import { yearNumber } from "../../../../helpers/yearNumber";

const Year = ({ changeHandler, filter }) => {
  return (
    <div className="w-full my-4 p-2">
      {blogsYear.map((item) => (
        <div className="border" key={item.id}>
          <input
            type="radio"
            name="year"
            value={item.year}
            id={item.year}
            onChange={changeHandler}
            checked={filter.year === item.year}
            className="hidden"
          />
          <label
            htmlFor={item.year}
            className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
          >
            <span>{item.year}</span>
            <span>{yearNumber(item.year)}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Year;
