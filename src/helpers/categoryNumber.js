import { products } from "../data/products";

export const categoryNumber = (category) => {
  if ((category === "")) {
    return products.length;
  } else {
    return products.filter((item) => item.category === category).length;
  }
};
