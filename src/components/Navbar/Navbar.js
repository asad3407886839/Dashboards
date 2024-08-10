// src/components/Navbar.js
import React from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className=" lg:hidden bg-white shadow fixed w-full z-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button
          className="lg:hidden p-2"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
        <h1 className="text-2xl font-bold">My Project</h1>
      </div>
    </header>
  );
};

export default Navbar;
