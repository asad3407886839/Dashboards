// src/components/Home.js
import React from 'react';
import "./P8.css"
const P8 = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">


        <h2 className="text-3xl font-bold mb-4 text-start w-fit bg-custom-gradient bg-clip-text text-transparent">Add Project</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-md font-medium text-gray-700 ml-1">Company Name</label>
            <input
              type="text"
              id="companyName"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg text-sm font-light"
              placeholder="Enter company name"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700 ml-1">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg "
                placeholder="Enter email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-md font-medium text-gray-700 ml-1">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label htmlFor="dateAdded" className="block text-md font-medium text-gray-700 ml-1">Date Added</label>
              <input
                type="date"
                id="dateAdded"
                className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="service" className="block text-md font-medium text-gray-700 ml-1">Select Service</label>
            <select
              id="service"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="" disabled selected>Select service</option>
              <option value="webDevelopment">Web Development</option>
              <option value="appDevelopment">App Development</option>
              <option value="seo">SEO</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-custom-gradient text-white p-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default P8;
