import React, { useState, useEffect } from 'react';
import P12 from './P12';

const M12 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('overflow-y-hidden');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  const handleEscKey = (event) => {
    if (event.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <div>
      <button
        className="px-4 py-2 text-white transition rounded-md bg-rose-500 hover:bg-rose-700"
        onClick={openModal}
      >
        Click to Open Modal
      </button>

      {isModalOpen && (
        <div
          id="modelConfirm"
          className="fixed inset-0 z-50 w-full h-full px-4 overflow-y-auto bg-gray-900 bg-opacity-60"
        >
          <div className="relative max-w-md mx-auto bg-white rounded-md shadow-xl top-40">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 pt-0 text-center">
              <P12 />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default M12;
