import React from "react";

// import images
import history1 from "../../assets/history1.jpg";
import history2 from "../../assets/history2.jpg";

// import icons
import { GiSewingMachine } from "react-icons/gi";
import { GiSewingNeedle } from "react-icons/gi";
import { RiShirtFill } from "react-icons/ri";

const History = () => {
  return (
    <div>
      <div className="bg-red-50 flex flex-row">
        <div
          className="w-1/2 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${history1})` }}
        ></div>
        <div className=" w-1/2 p-16 py-3 flex flex-col">
          <span className=" text-3xl my-6 mx-auto">
            A Brief History of the BoShop
          </span>
          <p className="leading-6 text-gray-900 m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in. Consectetur adipiscing elit.
            Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed sapien.
          </p>
          <span className="text-2xl font-semibold py-3">1950-1999</span>
          <p className="m-0">
            Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus sed
            sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
            scelerisque felis. consectetur adipiscing elit. Maecenas nibh dolor
          </p>
          <span className="text-2xl font-semibold py-3"> 2000-2018</span>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien.
          </p>
        </div>
      </div>
      <div className="flex flex-row bg-red-50">
        <div className="w-1/2 flex flex-col p-16 py-4">
          <span className=" text-3xl my-6 mx-auto">
            Fully Customizability Options Look Beautiful in 2018
          </span>
          <p className="mx-auto leading-6 text-gray-900 font-medium m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius.
          </p>
          <div className="flex flex-row justify-between text-6xl my-9">
            <div>
              <GiSewingMachine className="mx-auto" />
              <span className="text-xl text-center">Fully Customizability</span>
            </div>
            <div>
              <GiSewingNeedle className="mx-auto" />
              <span className="text-xl">Fully Hand Made</span>
            </div>
            <div>
              <RiShirtFill className="mx-auto" />
              <span className="text-xl">Elegant Looks</span>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-slate-800 py-3 px-4 font-medium text-gray-50 hover:bg-yellow-300 hover:text-slate-800 ">
              SHOP NOW
            </button>
          </div>
        </div>

        <div
          className="w-1/2 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${history2})` }}
        ></div>
      </div>
    </div>
  );
};

export default History;
