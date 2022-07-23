import React from 'react'
import BlogList from '../component/blog/blogList/BlogList'
import LayoutWrapper from '../component/HOC/LayoutWrapper'

const Blog = () => {
  return (
    <div>
      <BlogList/>
      
    </div>
  )
}

export default LayoutWrapper(Blog)