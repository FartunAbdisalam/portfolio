import React from "react";
import { Award, GraduationCap } from "lucide-react";
import profilePic from "../assets/profilePic.jpg";

const About = () => {
  return (
    <div className="py-8 my-16 px-5 ">
      <h1 className="text-center text-3xl font-semibold tracking-wider">
        About Me
      </h1>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-3">
        <div className="lg:row-span-2 md:hidden lg:block border rounded-lg border-neutral-800 flex justify-center align-center p-5 lg:pl-10">
          <img className="lg:w-80 lg:h-80 rounded-xl" src={profilePic} alt="" />
        </div>

        <div className="flex flex-col justify-center aling-center items-center p-8 border-2 border-slate-300 rounded-lg space-y-1 bg-slate-200 shadow-xl">
          {<Award className="pb-4" size={50} />}
          <h1 className="text-xl font-semibold tracking-wide">Experince</h1>
          <p className="text-slate-700">1+ years</p>
          <p className="text-xl font-normal tracking-wide">Software Engineer</p>
        </div>
        <div className="flex flex-col justify-center aling-center items-center p-8 border-2 border-slate-300 rounded-lg space-y-1 bg-slate-200 shadow-xl">
          {<GraduationCap size={50} />}
          <h1 className="text-xl font-semibold tracking-wide">Education</h1>
          <p className="text-slate-700">B.Sc in Software Engineering</p>
          <p className="text-slate-700">Software Development training</p>
        </div>
        <div className="lg:col-span-2 md:col-span-2">
          <p className="p-5 text-justify text-lg">
            I am a passionate software engineering graduate with a strong
            foundation in full-stack web development. I have hands-on experience
            building responsive and dynamic web applications using modern
            technologies like the MERN stack. I am eager to continuously expand
            my technical knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
