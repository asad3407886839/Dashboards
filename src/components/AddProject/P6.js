import React, { useState } from 'react';
import { MdOutlineMessage } from "react-icons/md";
import { TbFileUpload } from "react-icons/tb";

const Card = ({ title, content, timestamp, author, versionText }) => (
  <div className="relative p-6 mb-4 bg-gray-200 border-2 border-gray-300 shadow-md rounded-xl">
    <p className="mb-16 text-gray-800">{content}</p>

    <div className="absolute flex items-center space-x-2 top-4 right-4">
      <MdOutlineMessage className="text-xl text-purple-600" />
    </div>

    {versionText && (
      <div className="absolute flex items-center p-1 space-x-2 bg-white border-2 border-black rounded-lg top-32 left-4">
        <TbFileUpload className="text-2xl text-purple-600 " />
        <span className="text-sm text-black">{versionText}</span>
      </div>
    )}

    <div className="absolute flex items-center justify-between bottom-4 left-4 right-4">
      <span className="mt-10 text-sm text-gray-700">{timestamp}</span>
      <button className="px-4 py-2 text-sm text-white bg-purple-500 rounded-lg hover:bg-purple-400">
        {author}
      </button>
    </div>
  </div>
);

const P6 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleOpen = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="px-8 py-2 mb-4 ml-6 text-white bg-blue-600 rounded-md hover:bg-blue-500"
        onClick={handleOpen}
      >
        Open Comments
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal">
          <div className="absolute inset-0 bg-gray-900 opacity-50 modal-overlay" onClick={handleClose}></div>
          <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg modal-container">
            <div className="px-6 py-4 modal-content">
              <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                <p className="text-2xl font-bold text-gray-800">Comments</p>
                <div className="bg-purple-600 cursor-pointer" onClick={handleClose}>
                  <svg
                    className="text-black fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
                  </svg>
                </div>
              </div>
              <div className="my-8 max-h-[400px] overflow-y-auto">
                {/* Container with scroll */}
                <div className="space-y-4">
                  <Card
                    title="Comment 1"
                    content="Modal content goes here. Additional content for the third card Modal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third card."
                    timestamp="3:04 - 12 Jan 2024"
                    author="Janvid Sidana - Senior"
                  />
                  <Card
                    title="Comment 2"
                    content="Modal content goes here. Additional content for the third card Modal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third card."
                    timestamp="4:15 - 13 Jan 2024"
                    author="Alice Johnson - Junior"
                    versionText="v.23.0. dwg"
                  />
                  <Card
                    title="Comment 3"
                    content="Modal content goes here. Additional content for the third card Modal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third cardModal content goes here. Additional content for the third card."
                    timestamp="5:20 - 14 Jan 2024"
                    author="Robert Smith - Lead"
                    versionText="v.23.0. dwg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default P6;
