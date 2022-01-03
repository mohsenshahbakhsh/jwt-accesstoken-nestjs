import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 sticky top-0 z-50 flex flex-row items-center justify-between font-RubikRegular p-5 rounded-b-sm bg-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="32"
        height="32"
      >
        <path fill="none" d="M0 0H24V24H0z" />
        <path
          d="M12 2c5.523 0 10 4.477 10 10 0 4.13-2.504 7.676-6.077 9.201l-2.518-6.55C14.354 14.148 15 13.15 15 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.15.647 2.148 1.596 2.652l-2.518 6.55C4.504 19.675 2 16.13 2 12 2 6.477 6.477 2 12 2z"
          // fill="rgba(52,72,94,1)"
          fill="white"
        />
      </svg>
      <h4 className="text-white">user authintication</h4>
      <a
        className="bg-white rounded-md px-4 py-2 text-sm text-primary"
        href="https://github.com/mohsenshahbakhsh/userauth-microservice-nestjs-docker"
      >
        Source
      </a>
    </header>
  );
};

export default Header;
