import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex flex-row items-center justify-between font-RubikRegular z-10 p-5 border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55C14.354 14.148 15 13.15 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.15.647 2.148 1.596 2.652l-2.518 6.55C4.504 19.675 2 16.13 2 12 2 6.477 6.477 2 12 2z"
          fill="rgba(52,72,94,1)"
        />
      </svg>
      <h4 className="text-primary">user authintication</h4>
      <a
        className="bg-primary bg-opacity-90 rounded-md px-4 py-2 text-sm text-white"
        href="https://github.com/mohsenshahbakhsh/userauth-microservice-nestjs-docker"
      >
        Source
      </a>
    </nav>
  );
};

export default Navbar;