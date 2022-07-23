import React from 'react'
import BlogDetails from '../component/blogDetails/BlogDetails'
import Comments from '../component/comments/Comments'
import LayoutWrapper from '../component/HOC/LayoutWrapper'
const BlogDetailPage = () => {
  return (
    <div>
      <BlogDetails/>
      <Comments/>
    </div>
  )
}

export default LayoutWrapper(BlogDetailPage)