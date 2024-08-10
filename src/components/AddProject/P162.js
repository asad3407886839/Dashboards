import React, { useState } from 'react'; // Import useState from React
import { FiFileText, FiClipboard } from 'react-icons/fi';
import { FcDocument } from 'react-icons/fc';
import { AiFillCaretLeft } from 'react-icons/ai'; // Import the icon
import P142 from './P142';
const P162 = () => {
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
     
     

      <div className="mb-32 ">
        
      <div className="flex flex-wrap gap-3 p-4 pl-24 overflow-x-auto">
        {checkboxNames.map((name, index) => (
          <label
            key={index}
            className="flex items-center flex-shrink-0 p-2 bg-white border-black rounded-xl"
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
         <P142/>
      </div>
     
    </div>
    
    </div>
  );
};

export default P162;
