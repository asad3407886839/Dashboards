import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from React Icons
import './Plast3.css';

const Plast3 = () => {
  return (
    <div className="h-24 p-10 ">
      <section className="con">
      
        {/* CSS Chart */}
        <figure className=" chart" data-percent="75">
       
          <img className="css" src="." alt="" />
          
          <svg width="200" height="200">
            <circle className="outer" cx="95" cy="95" r="85" transform="rotate(-90, 95, 95)" />
          </svg>
        </figure>
        <div className="pt-4 pl-52">
        <h1 className="">
          By clicking on team<br/> you can view  the<br/> team progress
        </h1>
        </div>
        <div>
        <h1 className="ml-8 text-2xl font-bold ">
          70% Done
        </h1>
        </div>

        {/* Buttons with arrows */} 
        <div className="flex mt-32 space-x-4">
          <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            SakeTeam
            <FaArrowRight className="ml-2" />
          </button>
          <button className="flex items-center px-4 py-2 text-black border-2 border-blue-500 rounded-xl">
            DesignTeam
            <FaArrowRight className="ml-2" />
          </button>
          <button className="flex items-center px-4 py-2 text-black border-2 border-blue-500 rounded-xl">
            Factory
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Plast3;
