import React from "react";
import opensource from "../assets/images/open-source-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full h-10 flex flex-row items-center font-RubikRegular z-10 bg-black">
      <img
        className="w-10 h-8 border-none rounded-xl cursor-pointer"
        src={opensource}
        alt="profile"
      />
    </nav>
  );
};

export default Navbar;
