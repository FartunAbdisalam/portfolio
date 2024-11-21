import React from "react";
// import { FaSquareGithub } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
import { heroSecInfo } from "../Constants/index";
import pic1 from "../assets/pic1.jpg";

const Herosection = () => {
  return (
    <section className="py-12 px-5 my-12">
      <div className="lg:flex items-center justify-center align-center lg:space-x-12 space-y-4 py-5">
        <div className="flex justify-center align-center">
          <img className="rounded-full w-80 h-80 p-3" src={pic1} alt="" />
        </div>
        <div className="space-y-4 text-center p-3">
          <p className="text-slate-500 text-center">Hello, I'm</p>
          <h1 className="text-xl font-bold tracking-wider p-2">
            Fartun Abdisalam
          </h1>
          <h1 className="tracking-wide font-semibold text-slate-600 mb-3">
            Software Engineer
          </h1>
          <div className="flex justify-center align-center space-x-3 mb-3">
            <button className="h-10 w-40 rounded-full border-2 border-neutral-300">
              <a className="text-black text-center p-3">Download cv</a>
            </button>
            <button className="h-10 w-40 rounded-full bg-neutral-800">
              <a className="text-white text-center p-3">Contact Info</a>
            </button>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-7 p-3">
            {heroSecInfo.map((item, index) => (
              <a href={item.link} key={index}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
