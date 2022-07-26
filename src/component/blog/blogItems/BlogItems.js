import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { Link } from "react-router-dom";
import TextButton from "../../buttons/text/TextButton";



const BlogItems = ({ FilteredBlogs }) => {
  return (
    <div>
      {FilteredBlogs.map((blog) => (
        <div className="flex flex-col justify-center items-start py-10 border-b-2">
          <img src={blog.image} alt="blog img" className="w-full h-auto mx-auto" />
          <Link to={`${blog.id}`} className="text-2xl font-semibold text-slate-800 hover:text-yellow-400 transition-colors duration-300 pb-5 pt-8">
            {blog.title}
          </Link>
          <div className="flex flex-row w-96 justify-between items-center">
            <div className="flex flex-row justify-start items-center">
              <AiOutlineUser className="mx-2" />
              <span className="text-sm text-gray-700">by {blog.user.name}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <BsCalendar3 className="mx-2" />
              <span className="text-sm text-gray-700">{blog.createdAt}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <FaRegComment className="mx-2" />
              <span className="text-sm text-gray-700">{blog.comment}</span>
            </div>
            <div className="flex flex-row justify-start items-center">
              <AiOutlineTag className="mx-2" />
              <span className="text-sm text-gray-700">{blog.tags}</span>
            </div>
          </div>
          <p className="py-4 text-gray-600 leading-8">{blog.dsecription}</p>
          <Link to={`${blog.id}`} >
          <TextButton text={"Read More"} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogItems;
