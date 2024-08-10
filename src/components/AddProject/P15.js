import React from 'react'
import { FcDocument } from "react-icons/fc";
const P15 = () => {
  return (
    <div>
     <div className='bg-white border-2 border-gray-100 rounded-xl'>
        <h1 className='m-6 text-2xl font-bold text-black md:text-3xl lg:text-5xl md:m-8 lg:m-10'>Glenmark</h1>
        <div className="flex flex-wrap items-center m-4 ml-4 space-y-4 md:flex-nowrap md:m-8 md:ml-10 md:space-y-0 md:space-x-8">
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Initial PO</h2>
            <div className="flex items-center p-2 bg-gray-100 border-2 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.0/dwg</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Service PO</h2>
            <div className="flex items-center p-2 bg-gray-100 border-2 border-gray-200 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.1/dwg</span>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='font-semibold text-black text-md md:text-lg'>Conceptual Layout</h2>
            <div className="flex items-center p-2 bg-gray-100 border-2 border-gray-200 rounded-xl">
              <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
              <span className='ml-2 text-sm font-semibold md:text-xl'>v.2.3.2/dwg</span>
            </div>
          </div>
        </div>
      </div>
      <div>
 
      <div className="flex flex-row items-start bg-white border-black">

{/* Section 1 */}
<div className="flex flex-col items-center m-4 ml-4 space-y-4 md:m-8 md:ml-10 md:space-y-8">
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-semibold text-black text-md md:text-lg">Initial PO</h2>
    <div className="flex items-center p-2 bg-gray-100 border-2 rounded-xl">
      <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
      <span className="ml-2 text-sm font-semibold md:text-xl">v.2.3.0/dwg</span>
    </div>
    <div className="flex items-center space-x-4">
      <p className="text-sm text-green-600">Approved</p>
      <p className="text-sm">8/7/2024</p>
    </div>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p>Signed and approved by <br/>Designer,Senior & Client</p>
    </div>
  </div>
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-semibold text-black text-md md:text-lg">Service PO</h2>
    <div className="flex items-center p-2 bg-gray-100 border-2 border-gray-200 rounded-xl">
      <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
      <span className="ml-2 text-sm font-semibold md:text-xl">v.2.3.1/dwg</span>
    </div>
    <div className="flex items-center space-x-4">
      <p className="text-sm text-green-600">Approved</p>
      <p className="text-sm">8/7/2024</p>
    </div>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p>Signed and approved by <br/>Designer,Senior & Client</p>
    </div>
  </div>
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-semibold text-black text-md md:text-lg">Conceptual Layout</h2>
    <div className="flex items-center p-2 bg-gray-100 border-2 border-gray-200 rounded-xl">
      <FcDocument className="text-3xl text-blue-500 md:text-4xl" />
      <span className="ml-2 text-sm font-semibold md:text-xl">v.2.3.2/dwg</span>
    </div>
    <div className="flex items-center space-x-4">
      <p className="text-sm text-green-600">Approved</p>
      <p className="text-sm">8/7/2024</p>
    </div>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p>Signed and approved by <br/>Designer,Senior & Client</p>
    </div>
  </div>
</div>

{/* Section 2 */}
<div className="flex flex-col items-center m-4 ml-4 space-y-4 md:m-8 md:ml-10 md:space-y-8">
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-bold text-black text-md md:text-lg">Description</h2>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p className="pb-20">Lorem ipsum is a dummy text <br/>used by designer’s world wide</p>
    </div>
  </div>
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-bold text-black text-md md:text-lg">Description</h2>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p className="pb-20">Lorem ipsum is a dummy text <br/>used by designer’s world wide</p>
    </div>
  </div>
  <div className="flex flex-col items-center w-auto">
    <h2 className="font-bold text-black text-md md:text-lg">Description</h2>
    <div className="p-2 mt-2 bg-gray-100 border-2 rounded-xl">
      <p className="pb-20">Lorem ipsum is a dummy text <br/>used by designer’s world wide</p>
    </div>
  </div>
</div>




   

</div>

           
      </div>
    </div>
  )
}

export default P15
