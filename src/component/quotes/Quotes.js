import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";
import { quotes } from "../../data/dummyData";

const Quotes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex flex-col pb-20 pt-10 text-center w-2/3 mx-auto">
      <div className="mx-auto text-2xl ">
        <ImQuotesLeft />
      </div>
      <Slider {...settings} className=" w-full mx-auto">
        {quotes.map((item) => (
          <div className=" flex flex-col justify-center p-7 text-center" key={item.id}>
            <span>{item.comment}</span>
            <span className=" font-semibold block pt-7">{item.name}</span>
            <span className="pt-3 text-gray-600">{item.position}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Quotes;
