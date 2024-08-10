// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import logo from "../../Assets/Logo/DolantoLogo.svg";
import dashboardLogo from "../../Assets/Sidebar/dashboard.svg";
import addprojectLogo from "../../Assets/Sidebar/person-add-outline.svg"; // Import your dashboard SVG logo
import memberlistLogo from "../../Assets/Sidebar/people-outline.svg"; // Import your dashboard SVG logo
import trendingLogo from "../../Assets/Sidebar/trending.svg"; // Import your dashboard SVG logo
import monitorLogo from "../../Assets/Sidebar/monitor.svg"; // Import your dashboard SVG logo
import logoutLogo from "../../Assets/Sidebar/logout.svg"; // Import your dashboard SVG logo
 // Import your dashboard SVG logo

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: dashboardLogo }, // Use imported SVG logo
    { name: 'Add project', path: '/addProject', icon :addprojectLogo }, // Replace '/path/to/about.svg' with your actual path
    { name: 'Teams', path: '/team', icon: addprojectLogo  }, // Replace '/path/to/contact.svg' with your actual path
    { name: 'Members list', path: '/memberlist', icon: memberlistLogo  }, // Replace '/path/to/contact.svg' with your actual path
    { name: 'Reports', path: '/report', icon: trendingLogo  }, // Replace '/path/to/contact.svg' with your actual path
    { name: 'Monitors', path: '/monitor', icon:monitorLogo  }, // Replace '/path/to/contact.svg' with your actual 
    { name: 'Logout', path: '/logout', icon: logoutLogo }, // Replace '/path/to/contact.svg' with your actual path

  ];

  return (
    <div>
      {/* Overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-2xl transform transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:w-64 z-20`}
      >
        <div className="flex items-center justify-center p-4">
          <img src={logo} alt="Logo" className="h-24" />
          <button
            className="p-2 lg:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <ul className="p-4">
          {menuItems.map((item, index) => (
            <li key={index} className="my-2 text-gray-400">
              <NavLink
                to={item.path}
                exact
                activeClassName="bg-custom-gradient text-white"
                className="flex items-center p-2 rounded hover:bg-custom-gradient hover:text-white"
              >
                <img src={item.icon} alt={item.name} className="w-6 h-6 mr-3" /> {/* Render the SVG logo */}
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
