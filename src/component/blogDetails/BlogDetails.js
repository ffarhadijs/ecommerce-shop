import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import team1 from "../../assets/team-2.jpg";
import Tooltip from "@mui/material/Tooltip";

const BlogDetails = () => {
  const blogId = useParams().id;
  const blog = blogs[blogId];

  return (
    <div className="bg-gray-50 py-20">
      <div className="w-5/6 flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-start">
          <img src={blog.image} className="py-10" alt="blog img" />
          <h2 className="text-2xl font-semibold py-3">{blog.title}</h2>
          <div className="flex flex-row w-96 justify-between items-center py-3">
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
          <p className="pt-3 pb-6 leading-6 text-gray-800">{blog.text}</p>
          <div className="flex flex-row justify-around items-center w-5/6 mx-auto my-8">
            <div>
              <span className="text-xl text-slate-800 font-bold">Tags:</span>
              <span className="text-xl font-semibold text-gray-800 px-3">
                {blog.tags}
              </span>
            </div>
            <div className="flex flex-row justify-center items-center text-slate-800 text-xl">
              <span className=" font-bold">Share With:</span>
              <div className="mx-4 hover:text-yellow-400 transition-colors">
                <Tooltip title="Instagram">
                  <FiInstagram />
                </Tooltip>
              </div>
              <div className="mx-4 hover:text-yellow-400 transition-colors">
                <Tooltip title="FaceBook">
                  <FiFacebook />
                </Tooltip>
              </div>
              <div className="mx-4 hover:text-yellow-400 transition-colors">
                <Tooltip title="Twitter">
                  <FiTwitter />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 flex flex-row justify-start items-center w-2/3 p-4 mx-auto my-16">
            <div className="w-1/5 px-2">
              <img src={team1} className=" rounded-full" />
            </div>
            <div className="w-4/5 flex flex-col justify-center items-start p-4">
              <div className="flex flex-row justify-between items-center w-full">
                <div>
                  <h3 className=" text-slate-800 font-semibold text-lg">
                    NATASHA S.
                  </h3>
                  <span className="text-gray-600 text-sm">Co-Founder</span>
                </div>
                <div className="flex flex-row justify-center items-center text-slate-800 ">
                  <div className="mx-4 hover:text-yellow-400 transition">
                    <Tooltip title="Instagram">
                      <FiInstagram />
                    </Tooltip>
                  </div>
                  <div className="mx-4 hover:text-yellow-400 transition">
                    <Tooltip title="FaceBook">
                      <FiFacebook />
                    </Tooltip>
                  </div>
                  <div className="mx-4 hover:text-yellow-400 transition">
                    <Tooltip title="Twitter">
                      <FiTwitter />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <p className=" text-gray-800 py-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                NullamMorbi ac scelerisque mauris. Etiam sodales a nulla ornare
                viverra. Nunc at blandit neque, bociis natoque penatcing e
                scelerisque miscing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default BlogDetails;
