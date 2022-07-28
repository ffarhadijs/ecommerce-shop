import React from "react";
import { teamData } from "../../data/dummyData";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { Tooltip } from "@mui/material";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-20">
      <div className="pb-16">
        <span className="text-slate-800 font-semibold text-3xl pb-4 border-b-4 border-yellow-300">
          Our Team
        </span>
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap w-5/6 mx-auto">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="w-1/3 h-auto p-12 text-center flex flex-col justify-center items-center"
          >
            <div className="box relative w-full h-auto mb-4">
              <img
                src={member.img}
                className=" rounded-full w-full"
                alt="team member"
              />
              <div className="tools absolute top-0 left-0 w-full h-full rounded-full mb-4 bg-gray-800 bg-opacity-50 hidden flex-row justify-around items-center text-white text-3xl font-bold px-8">
                <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                  <Tooltip title="Instagram">
                  <FiInstagram style={{ display: "inline" }} />
                  </Tooltip>
                </button>
                <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                  <Tooltip title="FaceBook">
                  <FiFacebook style={{ display: "inline" }} />
                  </Tooltip>
                </button>
                <button className="hover:text-yellow-400 hover:scale-125 transition-all duration-500">
                  <Tooltip title="Twitter">
                  <FiTwitter style={{ display: "inline" }} />
                  </Tooltip>
                </button>
              </div>
            </div>
            <p className="text-slate-800 font-semibold text-xl py-3">
              {member.name}
            </p>
            <span className="text-gray-700 text-xs ">{member.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
