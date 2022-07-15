import React from "react";
import { ImQuestion, ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";

const Quotes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const comments = [
    {
      name: "John Smith",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
      position: "Co-Funder",
    },
    {
      name: "Jack Smith",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
      position: "Accountant",
    },
    {
      name: "Richard Smith",
      comment:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maioresnon, iure exercitationem corporis ea error laudantium minimaaccusamus eius repellendus, labore earum? Fugit, adipisci possimusreiciendis soluta excepturi ut exercitationem sapiente maximealiquid distinctio corrupti, doloremque rem vero nobis non?",
      position: "Engineer",
    },
  ];
  return (
    <div className="flex flex-col pb-20 pt-10 text-center w-2/3 mx-auto">
      <div className="mx-auto text-2xl ">
        <ImQuotesLeft />
      </div>
      <Slider {...settings} className=" w-full mx-auto">
        {comments.map((item) => (
          <div className=" flex flex-col justify-center p-7 text-center">
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
