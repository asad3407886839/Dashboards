import React, { useRef } from 'react';
import { FaSearch, FaBell, FaFilePdf } from 'react-icons/fa'; // Import icons
import { AiFillCaretDown } from 'react-icons/ai'; // Import AiFillCaretDown icon

const PNavbar = () => {
  // Reference to the hidden file input element
  const fileInputRef = useRef(null);

  // Handler function to open the file input dialog
  const handlePdfIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handler function to process the selected file
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Process the file here (e.g., upload it or display it)
      console.log("Selected file:", file);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      {/* Left Side - Button */}
      <div className="flex items-center space-x-2">
        <button className="flex items-center px-16 py-3 text-black bg-gray-100 rounded-lg hover:bg-gray-200">
          Sale Team
          <AiFillCaretDown className="ml-2 text-gray-600" />
        </button>
      </div>

      {/* Center - Search Bar */}
      <div className="relative flex-grow max-w-lg mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2" />
      </div>

      {/* Right Side - Icons */}
      <div className="flex mr-12 space-x-4">
        <FaBell className="text-2xl border rounded-full cursor-pointer hover:text-gray-800" />
        {/* PDF Icon */}
        <FaFilePdf
          className="text-xl text-gray-600 cursor-pointer hover:text-gray-800"
          onClick={handlePdfIconClick}
        />
        {/* Hidden File Input */}
        <input
          type="file"
          accept=".pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default PNavbar;
