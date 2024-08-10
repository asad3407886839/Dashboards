import React from 'react';
import { FiFileText, FiClipboard } from 'react-icons/fi';
import { FcDocument } from 'react-icons/fc';
 import Plast2 from './Plast2';

const Plast = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col items-center justify-between m-4 md:flex-row md:m-10'>
        <h1 className='text-2xl font-bold text-blue-600 md:text-3xl'>Project Information</h1>
        <div className='w-full max-w-sm mt-4 md:mt-0'>
          <input
            type='text'
            placeholder='Project Name'
            className='w-full px-4 py-2 placeholder-blue-600 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600'
          />
        </div>
      </div>
      <hr className='mt-4 border-t border-black' />
      <div className='flex flex-col items-start m-4 space-y-4 md:flex-row md:items-center md:m-8 md:space-y-0 md:space-x-8'>
        <div className='flex flex-col flex-grow space-y-4 md:flex-row md:space-y-0 md:space-x-8'>
          <div>
            <h2 className='text-lg font-semibold text-black'>Initial PO</h2>
            <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
              <FcDocument className='ml-2 text-4xl text-blue-500' />
              <span className='ml-2 text-xl font-semibold'>v.2.3.0/dwg</span>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-semibold text-black'>Service PO</h2>
            <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
              <FcDocument className='ml-2 text-4xl text-blue-500' />
              <span className='ml-2 text-xl font-semibold'>v.2.3.1/dwg</span>
            </div>
          </div>
          <div>
            <h2 className='text-lg font-semibold text-black'>Conceptual Layout</h2>
            <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
              <FcDocument className='ml-2 text-4xl text-blue-500' />
              <span className='ml-2 text-xl font-semibold'>v.2.3.2/dwg</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
          <button className='flex items-center px-4 py-3 text-white bg-blue-600 rounded-xl'>
            <FiFileText className='mr-2' />
            View BOQ Summary
          </button>
          <button className='flex items-center px-4 py-3 text-white bg-blue-600 rounded-xl'>
            <FiClipboard className='mr-2' />
            View Job Card
          </button>
        </div>
      </div>
      <div className='p-4 bg-white border-2 border-gray-300 rounded-2xl md:p-8'>
        <h1 className='mt-3 ml-4 text-2xl font-bold'>Client Info</h1>
        <hr className='mt-4 ml-4 mr-4 border-t border-black' />
        <p className='p-4 pb-20 md:p-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
       <Plast2 /> 
    </div>
  );
};

export default Plast;
