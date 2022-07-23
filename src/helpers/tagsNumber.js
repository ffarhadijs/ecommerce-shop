import { blogs } from "../data/blogs";

export const tagsNumber = (tags) => {
    if ((tags === "All")) {
      return blogs.length;
    } else {
      return blogs.filter((item) => item.tags === tags).length;
    }
  };
  