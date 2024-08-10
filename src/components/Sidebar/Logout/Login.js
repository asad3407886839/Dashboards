import React from 'react';
import Otp from './Otp';
const Login = () => {
  return (
    <div className="min-h-screen px-4  bg-gray-50 dark:bg-gray-800 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-lg sm:mx-auto">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg min-h-96 dark:bg-gray-900 rounded-xl">
          <div className="flex flex-col items-center justify-center h-full select-none">
            <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <a href="https://amethgalarcio.web.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" className="w-8" alt="Logo" />
              </a>
              <p className="m-0 text-[16px] font-semibold dark:text-white">DOLANTO</p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Engineering Pvt Ltd
              </span>
            </div>
            <div className="flex flex-col w-full gap-2 py-3">
              <label htmlFor="name" className="text-xs font-semibold text-gray-400">Name</label>
              <input 
                id="name"
                className="w-full px-4 py-3 mb-5 text-sm border rounded-lg outline-none md:w-96 dark:border-gray-500 dark:bg-gray-900" 
                placeholder="Enter your full name" 
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="phone" className="text-xs font-semibold text-gray-400">Phone Number</label>
              <input 
                id="phone"
                type="tel" 
                className="w-full px-4 py-3 mb-5 text-sm border rounded-lg outline-none md:w-96 dark:border-gray-500 dark:bg-gray-900" 
                placeholder="Enter your phone number" 
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="team" className="text-xs font-semibold text-gray-400">Team</label>
              <input 
                id="team"
                className="w-full px-4 py-3 mb-5 text-sm border rounded-lg outline-none md:w-96 dark:border-gray-500 dark:bg-gray-900" 
                placeholder="Enter your team" 
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="password" className="text-xs font-semibold text-gray-400">Password</label>
              <input 
                id="password"
                type="password" 
                className="w-full px-4 py-3 mb-5 text-sm border rounded-lg outline-none md:w-96 dark:border-gray-500 dark:bg-gray-900" 
                placeholder="••••••••" 
              />
            </div>
            <div className="w-full mt-5">
              <button 
                className="w-full px-8 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md cursor-pointer select-none hover:bg-blue-800 focus:ring-offset-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
               Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <Otp/>
    </div>
  );
};

export default Login;



