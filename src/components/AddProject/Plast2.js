import React from 'react';
// import Plast3 from './Plast3';

const Plast2 = () => {
  return (
    <div className="min-h-screen p-4 dark:bg-gray-800">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Main Content Area */}
        <div className="w-full p-4 bg-white border border-gray-300 rounded-xl dark:bg-gray-800 md:w-3/5">
          <h4 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl dark:text-white">Product Update</h4>
          
          {/* Header Row */}
          <div className="flex flex-col gap-2 md:flex-row items-center justify-between mb-4 text-gray-lite dark:text-[#A6A6A6]">
            <p className="w-full text-sm text-gray-300 md:w-1/12">#</p>
            <p className="w-full text-sm text-gray-300 md:w-4/12">Name</p>
            <p className="w-full text-sm text-gray-300 md:w-2/12">Status</p>
            <p className="w-full text-sm text-right text-gray-300 md:w-4/12">Percentage</p>
          </div>

          <hr className="mt-4 border-t border-gray-200" />
          
          {/* Skill Items */}
          {[
            { number: 1, skill: 'Web Design', color: 'bg-red-500', width: '80%', percentage: '80%' },
            { number: 2, skill: 'Mobile App', color: 'bg-purple-500', width: '95%', percentage: '95%' },
            { number: 3, skill: 'Illustrator', color: 'bg-blue-500', width: '65%', percentage: '65%' },
            { number: 4, skill: 'Photoshop', color: 'bg-pink-500', width: '25%', percentage: '25%' }
          ].map((item, index) => (
            <div className="mt-5" key={index}>
              <div className="flex flex-col items-center gap-2 md:flex-row">
                <span className="w-full md:w-1/12 text-base font-semibold text-gray-lite dark:text-[#A6A6A6]">
                  {item.number}
                </span>
                <span className="w-full md:w-4/12 text-base text-gray-lite dark:text-[#A6A6A6]">
                  {item.skill}
                </span>
                <div className="flex items-center w-full md:w-4/12">
                  <div className="flex-grow h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 ${item.color} rounded-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
                <span
                  className={`text-base mt-2 md:mt-2 text-gray-lite ml-32 dark:text-[#A6A6A6] text-right border border-gray-300 rounded px-2 py-1 ${item.color} text-white`}
                  style={{ backgroundColor: item.color }}
                >
                  {item.percentage}
                </span>
              </div>
              <hr className="mt-4 border-t border-gray-300" />
            </div>
          ))}
        </div>

        {/* Side Component */}
        <div className="w-full p-4 bg-white border border-gray-300 rounded-xl dark:bg-gray-800 md:w-2/5">
          {/* <Plast3 /> */}
        </div>
      </div>
    </div>
  );
};

export default Plast2;
