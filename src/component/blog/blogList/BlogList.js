import React, { useState, useEffect } from "react";
import BlogItems from "../blogItems/BlogItems";
import FilterBlog from "../filterBlog/FilterBlog";
import { blogs } from "../../../data/blogs";


const BlogList = () => {
  const [FilteredBlogs, setFilteredBlogs] = useState(blogs);
  const [filter, setFilter] = useState({
    search: "",
    tags: "All Tags",
    year: "All",
  });
  const applyFilter = () => {
    let filtered = blogs;

    if (filter.search !== "") {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(filter.search.toLowerCase())
      );
    }
    if (filter.tags === "All Tags") {
      filtered = filtered.filter(
        (blog) =>
          blog.tags === "Furniture" ||
          blog.tags === "Fashion" ||
          blog.tags === "Wood" ||
          blog.tags === "Curtains" ||
          blog.tags === "Personal"
      );
    } else {
      filtered = filtered.filter((blog) => blog.tags === filter.tags);
    }
    if (filter.year === "All") {
      filtered = filtered.filter(
        (blog) =>
          blog.year === "2022" || blog.year === "2021" || blog.year === "2020"
      );
    } else {
      filtered = filtered.filter((blog) => blog.year === filter.year);
    }

    setFilteredBlogs(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filter]);

  const changeHandler = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };
  const resetFilters = () => {
    setFilter({ search: "", tags: "All", year: "All" });
  };
  return (
    <div className="bg-gray-50 px-8">
      <div className="flex flex-row items-start justify-center">
        <div className="w-1/5 flex flex-col justify-start items-center py-10  mr-2">
          <FilterBlog
            changeHandler={changeHandler}
            filter={filter}
            resetFilters={resetFilters}
          />
        </div>
        
        <div className="w-4/5 flex flex-col justify-center items-center py-10">
          <BlogItems FilteredBlogs={FilteredBlogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogList;
