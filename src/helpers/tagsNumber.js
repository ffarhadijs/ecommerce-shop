import { blogs } from "../data/blogs";

export const tagsNumber = (tags) => {
    if ((tags === "All Tags")) {
      return blogs.length;
    } else {
      return blogs.filter((item) => item.tags === tags).length;
    }
  };
  