import React from "react";
import cultureImg1 from "../../assets/cultur-img-1.jpg";
import cultureImg2 from "../../assets/cultur-img-2.jpg";
import cultureImg3 from "../../assets/cultur-img-3.jpg";
import cultureImg4 from "../../assets/cultur-img-4.jpg";

const HistoryAbout = () => {
  return (
    <div className="pt-16">
      <div className=" w-5/6 mx-auto">
        <span className="font-semibold text-3xl">
          A Brief History of the BoShop
        </span>
        <p className="py-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh
          dolor, efficitur eget pharetra ac, cursus sed sapien. Cras posuere
          ligula ut blandit varius. Nunc consectetur scelerisque felis, et
          volutpat massa aliquam in. Curabitur sodales porttitor tortor sit amet
          malesuada.
        </p>
        <p className="pb-4 pt-2 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh
          dolor, efficitur eget pharetra ac, cursus sed sapien. Cras posuere
          ligula ut blandit varius. Nunc consectetur scelerisque felis, et
          volutpat massa aliquam in. Curabitur sodales porttitor tortor sit amet
          malesuada.
        </p>
        <div className=" py-8 pl-20">
          <span className="font-bold text-xl"> ______ 1950 ______ 1999 </span>
          <p className="py-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in. Curabitur sodales porttitor
            tortor sit amet malesuada.
          </p>
          <span className="font-bold text-xl"> ______ 2000 ______ 2018 </span>
          <p className="py-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            nibh dolor, efficitur eget pharetra ac, cursus sed sapien. Cras
            posuere ligula ut blandit varius. Nunc consectetur scelerisque
            felis, et volutpat massa aliquam in. Curabitur sodales porttitor
            tortor sit amet malesuada.
          </p>
        </div>
      </div>
      <div className=" relative flex w-full h-auto flex-row items-center justify-start pt-16">
        <div className="absolute sm:top-1/3 sm:bottom-1/3 w-full sm:w-1/2 sm:left-1/4 text-center text-white">
          <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl md:pb-4 md:pt-4">Awesome Work Culture</h3>
          <span className="lg:text-lg">
            Phasellus lacinia fermentutm bibendum. Interdum et malante ipuctus
            non. Nulla lacinia, eros vel fermentum consectetur, ris dolor in ex.
          </span>
        </div>
        <img src={cultureImg2} className="w-1/4" alt="history img"/>
        <img src={cultureImg3} className="w-1/4" alt="history img"/>
        <img src={cultureImg4} className="w-1/4" alt="history img"/>
        <img src={cultureImg1} className="w-1/4" alt="history img"/>
      </div>
    </div>
  );
};

export default HistoryAbout;
