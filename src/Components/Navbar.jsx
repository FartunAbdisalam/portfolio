// import React from 'react' bg-slate-200
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../Constants";

const Navbar = () => {
  const [mobileDrewerOpen, setMobileDrewerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrewerOpen(!mobileDrewerOpen);
  };

  return (
    <nav className="sticky py-5 bg-zinc-100">
      <div className="container px-20 mx-auto relative flex items-center justify-between">
        <h1 className="text-xl tracking-tight">Fartun Abdisalam</h1>
        <ul className="hidden lg:flex space-x-10 text-lg">
          {navItems.map((item, index) => (
            <li className="hover:text-neutral-500" key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={toggleNavbar}>
            {mobileDrewerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrewerOpen && (
        <div className="lg:hidden fixed w-full flex flex-col justify-center items-center bg-slate-50">
          <ul>
            {navItems.map((item, index) => (
              <li className="py-3" key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
