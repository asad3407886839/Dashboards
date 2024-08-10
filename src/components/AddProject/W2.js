import React from 'react';

const W2 = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="w-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <p className="text-2xl font-bold text-purple-500">BOQ SUMMARY</p>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M1.39 1.393l15.318 15.314m-15.318 0L16.706 1.393" />
            </svg>
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-10rem)] overflow-y-auto">
          {children} {/* Render children components */}
        </div>
        <div className="flex justify-end p-4 border-t border-gray-300">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default W2;
