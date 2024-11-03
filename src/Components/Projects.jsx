import React from "react";
import projects from "../Constants/index.jsx";

const Projects = () => {
  return (
    <div className="my-5 p-5">
      <p className="text-slate-500 text-center mb-2">Brows My Recent</p>
      <h1 className="text-center text-3xl tracking-wide font-semibold mb-3">
        Projects
      </h1>
      <div
        id="card-container"
        className="lg:flex justify-center align-center py-5 lg:space-x-5"
      >
        {projects.map((items, index) => (
          <div
            key={index}
            className="flex flex-col justify-center align-center p-5 border border-gray-900 rounded-2xl mb-5 "
          >
            <img
              className="h-64 lg:w-64 rounded-lg mx-4 object-cover"
              src={items.img}
              alt=""
            />
            <h1 className="text-lg font-semibold text-center py-3">
              {items.title}
            </h1>
            <div className="flex justify-center space-x-2">
              <button className="bg-white border border-black p-2 w-32 rounded-full ">
                <a
                  href={items.gitLink}
                  className="text-black text-lg tracking-wide text-center p-2"
                >
                  {items.gitBtn}
                </a>
              </button>
              <button className="bg-white border border-black p-2 rounded-full ">
                <a
                  href={items.demoLink}
                  className="text-black text-lg tracking-wide text-center p-2"
                >
                  {items.demoBtn}
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
