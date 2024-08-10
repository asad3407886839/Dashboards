import React, { useState } from 'react';
import { MdOutlineMessage } from 'react-icons/md'; // Import necessary icons
import { MdAttachFile } from "react-icons/md";

// Card component for displaying comment details
const Card = ({ title, content, timestamp, author }) => (
  <div className="relative p-6 mb-20 bg-gray-200 border-2 border-gray-300 shadow-md rounded-xl">
    <p className="mb-16 text-gray-800">{content}</p>

    <div className="absolute flex items-center space-x-2 top-4 right-4">
      <MdOutlineMessage className="text-xl text-purple-600" />
    </div>

    {/* Moving the timestamp and author above the input section */}
    <div className="flex items-center justify-between mt-4">
      <span className="text-sm text-gray-700">{timestamp}</span>
      <button className="px-4 py-2 text-sm text-white bg-purple-500 rounded-lg hover:bg-purple-400">
        {author}
      </button>
    </div>

    {/* Input section for user to add a comment */}
    <div className="relative mt-6">
      <textarea
        className="w-full h-56 p-2 mb-4 border rounded-lg resize-none"
        placeholder="Add your comment"
      ></textarea>

      {/* Line above the buttons */}
      <div className="absolute pl-3 pr-3 border-t border-gray-300 left-6 right-6 bottom-28"></div>

      {/* Container for buttons inside the input section */}
      <div className="absolute flex p-2 space-x-2 right-3 bottom-12">
        <button className="flex items-center px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-400">
          <MdAttachFile className="mr-2" /> {/* Adjust margin as needed */}
          Attach File
        </button>
        <button className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-400">
          Send
        </button>
      </div>
    </div>
  </div>
);

// Contact component for displaying a modal with comments
const Contact = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={onClose}></div>
        <div className="relative w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <h1 className="text-2xl font-bold text-gray-800">Comments</h1>
              <div className="bg-purple-500 cursor-pointer" onClick={onClose}>
                <svg
                  className="text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" fill="black" />
                </svg>
              </div>
            </div>
            <div className="my-8 max-h-[400px] overflow-y-auto">
              {/* Container for comments with scroll */}
              <div className="space-y-4">
                <Card 
                  title="Comment 1" 
                  content="Modal content goes here. Additional content for the third card. Modal content goes here. Additional content for the third card. Modal content goes here. Additional content for the third card. Modal content goes here. Additional content for the third card." 
                  timestamp="3:04 - 12 Jan 2024" 
                  author="Janvid Sidana - Senior" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

// Main component with button to toggle modal
const P7 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <button
        className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-400"
        onClick={handleToggleModal}
      >
        Open Comments Modal
      </button>
      <Contact isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default P7;
