// src/components/Layout.js
import React, { useState } from 'react';

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-grow lg:ml-0 transition-all duration-300">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-4 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
