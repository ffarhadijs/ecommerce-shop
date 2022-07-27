import { products } from "../data/products";

export const rateNumber = (rate) => {
  if ((rate === "All")) {
    return products.length;
  } else {
    return products.filter((item) => Math.floor(item.rating.rate) == rate).length;
  }
};
