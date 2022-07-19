import React from "react";

import { products } from "../../data/products";

const ZoomIn = (props) => {
  const selectedItem = products.find((item) => item.id === props.itemId);

  return (
    <div className=" fixed -translate-y-1/2 left-1/2 top-1/2 -translate-x-1/2 w-96 h-auto z-50">
      <img src={selectedItem.image} />
    </div>
  );
};

export default ZoomIn;
