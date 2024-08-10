import React from 'react';

const P3 = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-between p-6 border border-black shadow-md mt-14 md:flex-row rounded-2xl">
        {/* Left side - Text Content */}
        <div className="flex items-center w-full mb-4 md:mb-0 md:w-auto">
          <div className="pl-4 pr-6">
            <h1 className="mb-2 text-xl font-bold text-black md:text-2xl">May</h1>
            <h3 className="text-sm text-black md:text-md">Today is Saturday, June 9th, 2023</h3>
          </div>
          <div className="h-8 mx-4 border-l-2 border-gray-300 md:h-16"></div>
        </div>

        {/* Right side - Button */}
        <button className="absolute px-4 py-2 pr-6 font-semibold text-white transition duration-200 ease-in-out bg-blue-500 rounded-lg shadow-md bottom-6 right-6 hover:bg-blue-600 md:relative md:bottom-auto md:right-auto md:ml-auto">
          + Add File
        </button>
      </div>

      <div>
        <h1 className="mt-5 ml-5 text-2xl font-bold text-black">Job Details</h1>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-auto min-w-full mb-8 border border-gray-300 rounded-full shadow-md">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">JOB NAME</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">PO No & DATE</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">WORK ORDER NO.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">Amendment PO No & DATE</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">Scope of Work</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200 rounded-b-xl">Job Number</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h1 className="mt-5 mb-3 ml-5 text-2xl font-bold text-black">Contact Detail</h1>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-auto min-w-full mb-8 border border-gray-300 rounded-full shadow-md">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">BILLING ADDRESS</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">NAME</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">contact no.</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">EMAIL ID</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">SITE ADDRESS</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200 rounded-b-xl">NAME</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200 rounded-b-xl">CONTACT NUMBER</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200 rounded-b-xl">EMAIL ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h1 className="mt-5 mb-3 ml-5 text-2xl font-bold text-black">Commercial Detail</h1>
      </div>
      <div className="p-4 overflow-x-auto">
        <table className="w-auto min-w-full mb-8 border border-gray-300 rounded-full shadow-md">
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-black border-b border-gray-200">PAYMENT TERMS</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default P3;
