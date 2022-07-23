import React from "react";
import ProductDetail from "../component/productDetail/ProductDetail";
import LayoutWrapper from "../component/HOC/LayoutWrapper";
import Popular from "../component/popular/Popular";
import Shipment from "../component/shipment/Shipment";

const ProductDetailPage = () => {


  return (
    <div>
      <ProductDetail/>
      <Popular/>
      <Shipment/>
    </div>
  );
};

export default LayoutWrapper(ProductDetailPage);
