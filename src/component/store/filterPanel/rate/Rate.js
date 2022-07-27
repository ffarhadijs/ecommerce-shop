import React from "react";
import { rateData } from "../../../../data/dummyData";
import { rateNumber } from "../../../../helpers/rateNumber";
import Rating from "@mui/material/Rating";

const Rate = ({ filter, changeHandler }) => {
  return (
    <div className="w-full my-4 p-2">
      <div className="border">
        <input
          type="radio"
          name="rate"
          value="All"
          id="all"
          onChange={changeHandler}
          checked={filter.rate === "All"}
          className="hidden"
        />
        <label
          htmlFor="all"
          className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
        >
          <span>All</span>
          <span>{rateNumber("All")}</span>
        </label>
      </div>
      {rateData.map((item) => (
        <div className="border " key={item.id}>
          <input
            type="radio"
            name="rate"
            value={item.number}
            id={item.string}
            onChange={changeHandler}
            checked={filter.rate === item.number}
            className="hidden"
          />
          <label
            htmlFor={item.string}
            className="flex flex-row justify-between items-center w-full cursor-pointer p-2 "
          >
            <div>
              <Rating value={item.number} readOnly />
            </div>
            <span>{rateNumber(item.number)}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Rate;
