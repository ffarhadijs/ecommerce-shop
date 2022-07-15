import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const LayoutWrapper = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default LayoutWrapper;
