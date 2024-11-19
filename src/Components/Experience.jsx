import React from "react";
import { ExperienceList } from "../Constants";
console.log(ExperienceList);

const Experience = () => {
  return (
    <div className="pb-12 space-y-4">
      <p className="text-slate-500 text-center">Explore My</p>
      <h1 className="text-center text-3xl tracking-wide font-semibold mb-3">
        Experience
      </h1>

      <div className="lg:flex justify-center align-center space-y-4 lg:space-y-0 p-4">
        <div className="p-8 mx-4 border-2 border-gray-300 rounded-lg bg-neutral-100 shadow-xl items-center">
          <h1 className="text-center text-xl tracking-wide font-bold">
            Front End Development
          </h1>
          <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-x-16 gap-y-6 justify-center align-center p-7">
            {ExperienceList[0].map((item) => {
              return (
                <div className="flex space-x-3">
                  {item.tag}
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold"> {item.sub}</h1>
                    <p className="text-slate-500 font-light">{item.rate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="p-8 mx-4 border-2 border-gray-300 rounded-lg bg-neutral-100 shadow-xl items-center">
          <h1 className="text-center text-xl tracking-wide font-bold">
            Back-End Development
          </h1>
          <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-x-16 gap-y-6 justify-center align-center p-7">
            {ExperienceList[1].map((item) => {
              return (
                <div className="flex space-x-3">
                  {item.tag}
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold"> {item.sub}</h1>
                    <p className="text-slate-500 font-light">{item.rate}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
