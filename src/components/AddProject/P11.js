import React from 'react';
import { FcDocument } from 'react-icons/fc'; // Corrected the import from 'fa' to 'fc'
import { FaRegFilePdf } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';

const P11 = () => {
  return (
    <div>
      <div className='p-4 bg-white border rounded-xl'>
        <div className='flex flex-col items-center justify-between m-4 md:flex-row md:m-6'>
          <h1 className='text-2xl font-bold text-black md:text-5xl'>Glenmark</h1>
        </div>
        {/* <div className="absolute top-0 ml-2 left-40 right-[-1px] h-52 w-[1px] bg-green-300"></div> */}
        <div className='flex flex-col items-start space-y-4 md:flex-row md:items-center md:space-x-8'>
          <div className='flex flex-col flex-grow space-y-4 md:flex-row md:space-y-0 md:space-x-8'>
             <div className='flex flex-col'>
              <h2 className='text-lg font-semibold text-black'>Initial PO</h2>
              <div className='flex items-center p-2 bg-white border-2 border-gray-200 rounded-xl'>
                <FcDocument className='text-4xl text-blue-500' />
                <span className='ml-2 text-xl font-semibold'>v.2.3.0/dwg</span>
              </div>
              <div className="flex items-center space-x-4">
          <p className="ml-1 text-sm text-green-600">Senior Approved</p>
          <p className="text-sm">8/7/2024</p>
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4">
  <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
    {/* Card 1 */}
    <div>
      <p className="text-center "> </p>
      <div className="flex flex-col items-center p-2 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border rounded-xl">
          <FaRegFilePdf className="text-3xl text-red-600" />
          <span className="text-lg font-medium">v.2.3.1/dwg</span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-green-600">Approved</p>
          <p className="text-sm">8/7/2024</p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div>
    <div className="flex items-center w-4/5 p-2 ml-3 space-x-4 bg-white border-2 rounded-xl">
          <p className="p-2 ml-4 text-sm text-green-600 bg-white border"></p>
          <p className="text-sm">Purches Order</p>
        </div>
      <div className="flex flex-col items-center p-2 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border rounded-xl">
          <FaRegFilePdf className="text-3xl text-red-600" />
          <span className="text-lg font-medium">v.2.3.1/dwg</span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-green-600">Approved</p>
          <p className="text-sm">8/7/2024</p>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div>
    <div className="flex items-center w-4/5 p-1 ml-3 space-x-4 bg-white border-2 rounded-xl">
          <p className="p-2 ml-4 text-sm text-green-600 bg-white border"></p>
          <p className="text-sm">Purches Order</p>
        </div>
      <div className="flex flex-col items-center p-2 mt-8 bg-white border-2 border-gray-200 rounded-xl">
      <div className="flex items-center pt-5 pb-5 space-x-2 bg-gray-100 border pl-14 pr-14 rounded-xl">
        <h1 className="font-semibold">12 June 2024</h1>
        </div>
      </div>
    </div>
    {/* Card 4 */}
    <div>
      <p className="text-center "> </p>
      <div className="flex flex-col items-center p-3 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border rounded-xl">
          <FaRegFilePdf className="text-3xl text-red-600" />
          <span className="text-lg font-medium">v.2.3.1/dwg</span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-green-600">Approved</p>
          <p className="text-sm">8/7/2024</p>
        </div>
      </div>
    </div>

    {/* Card 5 */}
    <div>
      <p className="mt-3 text-center"> </p>
      <div className="flex flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border rounded-xl">
          <FaRegFilePdf className="text-3xl text-red-600" />
          <span className="text-lg font-medium">v.2.3.1/dwg</span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-green-600">Approved</p>
          <p className="text-sm">8/7/2024</p>
        </div>
      </div>
    </div>

    {/* Card 6 */}
    <div>
      <p className="mb-6 text-center"> </p>
      <div className="flex flex-col items-center p-2 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 space-x-2 bg-gray-100 border pl-14 pr-14 rounded-xl">
        <h1 className="font-semibold">12 June 2024</h1>
        </div>
        
      </div>
    </div>

    {/* Card 7 */}
    <div>
      <p className="mt-3 text-center "> </p>
      <div className="flex flex-col items-center p-3 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border border-gray-500 border-dashed rounded-xl">
          <FiUpload className="text-3xl text-gray-400" />
          <span className="text-lg font-medium">upload files</span>
        </div>
      </div>
    </div>

    {/* Card 8 */}
    <div>
      <p className="text-center "> </p>
      <div className="flex flex-col items-center p-3 bg-white border-2 border-gray-200 rounded-xl">
        <div className="flex items-center pt-5 pb-5 pl-8 pr-8 space-x-2 bg-gray-100 border border-gray-500 border-dashed rounded-xl">
          <FiUpload className="text-3xl text-gray-400" />
          <span className="text-lg font-medium">upload files</span>
        </div>
      </div>
    </div>

    
    </div>
</div>




    </div>
  );
};

export default P11;
