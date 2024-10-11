import React from "react";

const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  return (
    <div className="flex justify-center align-center text-center mt-12 py-4">
      <span className="text-md">
        Copyright &copy; {getYear()} Fartun Abdislam
      </span>
      {/* <span className="text-md"> {getYear()} Fartun Abdislam</span> */}
    </div>
  );
};

export default Footer;
