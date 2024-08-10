import React, { useState } from 'react';
import { FcDocument } from "react-icons/fc";
import WP1 from './WP1';
import W2 from './W2';

const WallPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className='bg-white border-2 border-gray-300 rounded-xl'>
        <h1 className='m-6 text-2xl font-bold text-black md:text-3xl lg:text-5xl md:m-8 lg:m-10'>Glenmark</h1>
        <div className="flex flex-wrap items-center m-4 ml-4 space-y-4 md:flex-nowrap md:m-8 md:ml-10 md:space-y-0 md:space-x-8">
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Initial PO</h2>
            <div className="flex items-center p-2 bg-gray-300 border-2 border-gray-200 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.0/dwg</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Service PO</h2>
            <div className="flex items-center p-2 bg-gray-300 border-2 border-gray-200 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.1/dwg</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Conceptual Layout</h2>
            <div className="flex items-center p-2 bg-gray-300 border-2 border-gray-200 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.2/dwg</span>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8 bg-gray-200 border-2 border-gray-200 rounded'>
        <h1 className='m-6 text-xl font-bold md:text-2xl lg:text-3xl md:m-8 lg:m-10'>Raw Material - Wall Panel Layout</h1>
        <div className='flex flex-wrap justify-around md:flex-nowrap'>
          <div className='relative flex items-center justify-center w-full mb-6 bg-gray-100 border-2 border-gray-300 border-dashed md:mb-8 md:w-80 h-14 rounded-xl'>
            <p className='absolute top-0 px-3 text-sm font-semibold text-black transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg md:text-lg left-24'>
              Total Quality
            </p>
            <h1 className='absolute pl-2 text-sm text-black md:text-xl left-4'>
              500
            </h1>
            <span className='absolute right-[-1.5rem] text-xl text-black'>
              -
            </span>
          </div>

          <div className='relative flex items-center justify-center w-full mb-6 bg-gray-100 border-2 border-gray-300 border-dashed md:mb-8 md:w-96 h-14 rounded-xl'>
            <p className='absolute top-0 px-3 text-sm font-semibold text-black transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg md:text-lg left-24'>
              Used Quality
            </p>
            <h1 className='absolute pl-2 text-sm text-black md:text-xl left-4'>
              500
            </h1>
            <span className='absolute right-[-1.5rem] text-xl text-black'>
              =
            </span>
          </div>

          <div className='relative flex items-center justify-center w-full mb-6 bg-gray-100 border-2 border-gray-300 border-dashed md:mb-8 md:w-96 h-14 rounded-xl'>
            <p className='absolute top-0 px-3 text-sm font-semibold text-black transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg md:text-lg left-24'>
              Pending
            </p>
            <h1 className='absolute pl-2 text-sm text-black md:text-xl left-4'>
              500
            </h1>
          </div>
        </div>
        <WP1 />
      </div>

      <div className='text-center'>
        <button onClick={openModal} className="px-4 py-2 m-4 text-white bg-purple-500 rounded-md hover:bg-purple-600">
          Open Modal
        </button>
        <W2 isOpen={isOpen} onClose={closeModal}>
          <WP1 /> {/* Render WP1 inside the modal */}
        </W2>
      </div>
    </div>
  );
};

export default WallPanel;
