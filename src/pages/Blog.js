import React from "react";
import BlogList from "../component/blog/blogList/BlogList";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import {Link} from "react-router-dom"
const Blog = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Blog List</span>
      </div>
      <BlogList />
    </div>
  );
};

export default LayoutWrapper(Blog);
