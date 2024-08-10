import React from 'react'
import { FcDocument } from 'react-icons/fc';
import P162 from './P162';
const P16 = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-between p-6 mt-16 ml-5 mr-5 border border-black shadow-md md:flex-row rounded-2xl">
        {/* Left side - Text Content */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="pl-4 pr-6">
            <h1 className="mb-2 text-xl font-bold text-gray-400 md:text-2xl">May</h1>
            <h3 className="text-sm text-gray-400 md:text-md">Today is Saturday, June 9th, 2023</h3>
          </div>
          <div className="h-8 mx-4 border-l-2 border-gray-300 md:h-16"></div>
        </div>
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

        {/* Right side - Button */}
        <button className="px-8 py-2 mr-10 font-semibold text-white transition duration-200 ease-in-out rounded-lg shadow-md bg-custom-gradient hover:bg-blue-600">
        Generate Team Report
        </button>
        
      </div>
      <P162/>
    </div>
  )
}

export default P16
