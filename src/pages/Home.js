import React from "react";
import Slider from "../component/banner/Slider";
import History from "../component/history/History";
import Popular from "../component/popular/Popular";
import Shipment from "../component/shipment/Shipment";
import Quotes from "../component/quotes/Quotes";
import LayoutWrapper from "../component/HOC/LayoutWrapper";

const Home = () => {
  return (
    <div >
      <Slider />
      <History />
      <Popular />
      <Shipment />
      <Quotes />
    </div>
  );
};

export default LayoutWrapper(Home);
