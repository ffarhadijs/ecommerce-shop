import React from 'react'

const Search = ({filter,changeHandler}) => {
  return (
    <input
          placeholder="Search..."
          type="text"
          onChange={changeHandler}
          name="search"
          value={filter.search}
          className="w-full p-2 border outline-none mb-10 mt-5"
        />
  )
}

export default Search