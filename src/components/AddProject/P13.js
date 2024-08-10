import React, { useState } from 'react'; // Import useState from React
import { FiFileText, FiClipboard } from 'react-icons/fi';
import { FcDocument } from 'react-icons/fc';
import { AiFillCaretLeft } from 'react-icons/ai'; // Import the icon
 import P132 from './P132';
const P13 = () => {
  const checkboxNames = [
    'TDS',
    'ApprovedDesign',
    'Indent',
    'AmendmentBOQ',
    'Dispatchdate',
    'NewDispatchdate',
    'RawMaterial'
  ];
 
  // State to manage which checkboxes are checked
  const [checkedItems, setCheckedItems] = useState(
    new Array(checkboxNames.length).fill(false)
  );

  // Handler to toggle checkbox state
  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div>
      <div className='p-4 bg-white border-black'>
        <div className='flex flex-col items-center justify-between m-4 md:flex-row md:m-10'>
          <h1 className='text-2xl font-bold text-black md:text-5xl'>Glenmark</h1>
        </div>
        {/* <div className="absolute top-0 ml-2 left-40 right-[-1px] h-52 w-[1px] bg-green-300"></div> */}
        <div className='flex flex-col items-start m-4 space-y-4 md:flex-row md:items-center md:m-4 md:space-y-0 md:space-x-8'>
          <div className='flex flex-col flex-grow space-y-4 md:flex-row md:space-y-0 md:space-x-8'>
            <div>
              <h2 className='text-lg font-semibold text-black'>Initial PO</h2>
              <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
                <FcDocument className='text-4xl text-blue-500' />
                <span className='ml-1 text-xl font-semibold'>v.2.3.0/dwg</span>
              </div>
            </div>
            <div>
              <h2 className='text-lg font-semibold text-black'>Service PO</h2>
              <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
                <FcDocument className='text-4xl text-blue-500' />
                <span className='ml-1 text-xl font-semibold'>v.2.3.1/dwg</span>
              </div>
            </div>
            <div>
              <h2 className='text-lg font-semibold text-black'>Conceptual Layout</h2>
              <div className='flex items-center p-1 bg-white border-2 border-gray-200 rounded-xl'>
                <FcDocument className='text-4xl text-blue-500' />
                <span className='ml-1 text-xl font-semibold'>v.2.3.2/dwg</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
     

      <div className="mb-32 bg-gray-300 border-black ">
        
      <div className="flex flex-wrap gap-3 p-4 overflow-x-auto">
        {checkboxNames.map((name, index) => (
          <label
            key={index}
            className="flex items-center flex-shrink-0 pt-1 pb-1 pl-3 pr-3 bg-white border-black rounded-xl"
            htmlFor={`checkbox-${index}`}
          >
            <input
              id={`checkbox-${index}`}
              type="checkbox"
              className="w-4 h-4"
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className="ml-2">{name}</span>
            <AiFillCaretLeft className="ml-2 text-xl text-gray-600" />
          </label>
        ))}
         <P132/> 
      </div>
     
    </div>
    
    </div>
  );
};

export default P13;
