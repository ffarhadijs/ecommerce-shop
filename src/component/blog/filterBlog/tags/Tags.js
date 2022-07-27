import React from "react";
import { blogsCategory } from "../../../../data/dummyData";
import { tagsNumber } from "../../../../helpers/tagsNumber";


const Tags = ({ changeHandler, filter }) => {
  return (
    <div className="w-full my-4 p-2">
      {blogsCategory.map((item) => (
        <div className="border " key={item.id}>
          <input
            type="radio"
            name="tags"
            value={item.name}
            id={item.name}
            onChange={changeHandler}
            checked={filter.tags === item.name}
            className="hidden"
          />
          <label
            htmlFor={item.name}
            className="flex flex-row justify-between items-center w-full cursor-pointer p-2"
          >
            <span>{item.name}</span>
            <span>{tagsNumber(item.name)}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Tags;
