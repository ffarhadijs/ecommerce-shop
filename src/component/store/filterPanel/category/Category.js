import React from "react";
import { categoryData } from "../../../../data/dummyData";
import {categoryNumber} from "../../../../helpers/categoryNumber"
const Category = ({ filter, changeHandler }) => {
  return (
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
  );
};

export default Category;
