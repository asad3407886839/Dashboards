import React, { useState } from 'react';

const P12 = () => {
  const [checkedItems, setCheckedItems] = useState({
    html: false,
    css: true,
    javascript: false,
    react: false,
    angular: true,
    vue: false,
    node: false,
    express: true,
    mongodb: false,
    sql: false,
    python: false,
    java: true,
    php: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div className=""> {/* Adjusted width here */}
      <div className="flex items-center justify-between pb-2 mb-4 border-b-2 border-gray-300">
        <div className="text-2xl font-semibold text-blue-600">
          Select fields to view BOQ
        </div>
        <button
          className="px-4 py-2 font-semibold text-black"
          onClick={() => alert('Button clicked!')}
        >
          +Add
        </button>
      </div>

      <div className="grid grid-cols-2 gap">
        {Object.keys(checkedItems).map((key) => (
          <div
            key={key}
            className="flex items-center p-3 space-x-3 rounded hover:bg-gray-100"
          >
            <input
              type="checkbox"
              id={key}
              checked={checkedItems[key]}
              onChange={handleCheckboxChange}
              className="w-6 h-6 text-teal-600 bg-blue-200 border-gray-300 rounded shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0"
            />
            <label htmlFor={key} className="flex w-full space-x-2 text-sm capitalize">
              {key}
            </label>
          </div>
        ))}
      </div>
      <button className='p-4 mt-3 ml-48 bg-blue-600 border rounded-full'>View BOQ Summary</button>
    </div>
  );
};

export default P12;
