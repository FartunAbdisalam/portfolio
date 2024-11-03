import React from "react";
import { Award, GraduationCap } from "lucide-react";
import imeg from "../assets/imeg.webp";

const About = () => {
  return (
    <div className="py-8 my-16 px-5 ">
      <h1 className="text-center text-3xl font-semibold tracking-wider">
        About Me
      </h1>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-3">
        <img
          className="md:hidden lg:block lg:w-96 lg:h-96 rounded-xl lg:row-span-2"
          src={imeg}
          alt=""
        />

        <div className="flex flex-col justify-center aling-center items-center p-8 border-2 border-slate-300 rounded-lg space-y-1 bg-slate-200 shadow-xl">
          {<Award className="pb-4" size={50} />}
          <h1 className="text-xl font-semibold tracking-wide">Experince</h1>
          <p className="text-slate-700">1+ years</p>
          <p className="text-xl font-normal tracking-wide">Software Engineer</p>
        </div>
        <div className="flex flex-col justify-center aling-center items-center p-8 border-2 border-slate-300 rounded-lg space-y-1 bg-slate-200 shadow-xl">
          {<GraduationCap size={50} />}
          <h1 className="text-xl font-semibold tracking-wide">Education</h1>
          <p className="text-slate-700">B.Sc in Software Engineer</p>
          <p className="text-slate-700">Software Development training</p>
        </div>
        <div className="lg:col-span-2 md:col-span-2">
          <p className="p-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fugiat recusandae consequatur dolorum ipsam ab libero excepturi
            neque delectus tempora labore quasi nam, omnis magnam saepe? Sint
            necessitatibus voluptate reiciendis blanditiis. Aut voluptatum
            incidunt amet, natus reprehenderit reiciendis dolorum dicta!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
