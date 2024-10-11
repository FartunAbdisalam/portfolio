import React from "react";
import { BadgeCheck } from "lucide-react";

const Experience = () => {
  return (
    <div className="pb-12 space-y-4">
      <p className="text-slate-500 text-center">Explore My</p>
      <h1 className="text-center text-3xl tracking-wide font-semibold mb-3">
        Experience
      </h1>

      <div className="lg:flex justify-center align-center space-y-4 lg:space-y-0 p-4">
        {/* card-1 */}
        <div className="p-8 mx-4 border-2 border-gray-300 rounded-lg bg-neutral-100 shadow-xl items-center">
          <h1 className="text-center text-xl tracking-wide font-bold">
            Front-End Development
          </h1>
          {/* items-flex-starts */}
          <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-x-16 gap-y-6 justify-center align-center p-7">
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">HTML</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">JavaScript</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">CSS</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">TypeScript</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">BootStrap</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">React JS</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Tailwind</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Vite</h1>
                <p className="text-slate-500 font-light">Basic</p>
              </div>
            </div>
          </div>
          {/* items-flex-end */}
        </div>
        {/* card-1-ends */}

        <div className="p-8 mx-4 border-2 border-gray-300 rounded-lg bg-neutral-100 shadow-xl items-center">
          <h1 className="text-center text-xl tracking-wide font-bold">
            Back-End Development
          </h1>
          {/* items-flex-starts */}
          <div className="grid lg:grid-cols-2 lg:grid-rows-4 gap-x-16 gap-y-6 justify-center align-center p-7">
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Node JS</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Express JS</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">MongoDB</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">My SQL</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">PHP</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Java</h1>
                <p className="text-slate-500 font-light">Intermediate</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Git</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <BadgeCheck size={28} />
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">GitHub</h1>
                <p className="text-slate-500 font-light">Experienced</p>
              </div>
            </div>
          </div>
          {/* items-flex-end */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
