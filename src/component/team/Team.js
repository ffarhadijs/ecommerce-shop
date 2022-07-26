import React from "react";
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";
import team5 from "../../assets/team-5.jpg";
import team6 from "../../assets/team-6.jpg";
import "../popular/styles.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Team = () => {
  const teamData = [
    { name: "Mark Adnan", position: "CEO & FOUNDER", img: team1 },
    { name: "Jennifer Rod", position: "DESIGNER", img: team2 },
    { name: "Natasha Singh", position: "DEVELOPER", img: team3 },
    { name: "Jahn Mark", position: "Product Designer", img: team4 },
    { name: "Jennifer Rod", position: "Quality Head", img: team5 },
    { name: "Natasha Singh", position: "DEVELOPER", img: team6 },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 py-20">
      <div className="pb-16">
        <span className="text-slate-800 font-semibold text-3xl pb-4 border-b-4 border-yellow-300">Our Team</span>
      </div>
      <div className="flex flex-row justify-between items-center flex-wrap w-5/6 mx-auto">
        {teamData.map((member) => (
          <div className="w-1/3 h-auto p-12 text-center flex flex-col justify-center items-center">
            <div className="box relative w-full h-auto mb-4">
              <img src={member.img} className=" rounded-full w-full" alt="team member" />
              <div className="tools absolute top-0 left-0 w-full h-full rounded-full mb-4 bg-gray-800 bg-opacity-50 hidden flex-row justify-around items-center text-white text-3xl font-bold px-8">
                <button>
                  <FiFacebook style={{ display: "inline" }} />
                </button>
                <button>
                  <FiTwitter style={{ display: "inline" }} />
                </button>
                <button>
                  <FiInstagram style={{ display: "inline" }} />
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
