import React from 'react'
import BlogDetails from '../component/blogDetails/BlogDetails'
import Comments from '../component/comments/Comments'
import LayoutWrapper from '../component/HOC/LayoutWrapper'
import {Link} from "react-router-dom"
const BlogDetailPage = () => {
  return (
    <div>
      <div className=" w-full h-32 bg-gradient-to-r text-xl from-gray-50 via-gray-200 to-gray-50 flex flex-row justify-center items-center">
        <Link to="/" className=" text-gray-600 ">
          BoShop
        </Link>
        <span className="px-2">/</span>
        <Link to="/blog" className=" text-gray-600 ">
          Blog List
        </Link>
        <span className="px-2">/</span>
        <span className=" text-black "> Blog</span>
      </div>
      <BlogDetails/>
      <Comments/>
    </div>
  )
}

export default LayoutWrapper(BlogDetailPage)