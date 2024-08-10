import React from 'react';

const Otp = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
              <a href="https://amethgalarcio.web.app/" target="_blank" rel="noopener noreferrer">
                <img src="https://amethgalarcio.web.app/assets/logo-42fde28c.svg" className="w-8" alt="Logo" />
              </a>
              </div>
        <h1 className="mb-6 text-2xl font-semibold text-center">Check Your Mail</h1>
        <p className="mb-4 text-center text-gray-600">We have sent an OTP to login your email</p>
        <div className="grid grid-cols-5 mx-12 my-2 gap-x-10">
          <div contentEditable={true} className="flex items-center justify-center bg-gray-100 rounded-lg cursor-text dark:bg-gray-800 w-14 aspect-square">
            <span className="text-gray-700 dark:text-gray-400">-</span>
          </div>
          <div contentEditable={true} className="flex items-center justify-center bg-gray-100 rounded-lg cursor-text dark:bg-gray-800 w-14 aspect-square">
            <span className="text-gray-700 dark:text-gray-400">-</span>
          </div>
          <div contentEditable={true} className="flex items-center justify-center bg-gray-100 rounded-lg cursor-text dark:bg-gray-800 w-14 aspect-square">
            <span className="text-gray-700 dark:text-gray-400">-</span>
          </div>
          <div contentEditable={true} className="flex items-center justify-center bg-gray-100 rounded-lg cursor-text dark:bg-gray-800 w-14 aspect-square">
            <span className="text-gray-700 dark:text-gray-400">-</span>
          </div>
          {/* <div contentEditable={true} className="flex items-center justify-center bg-gray-100 rounded-lg cursor-text dark:bg-gray-800 w-14 aspect-square">
            <span className="text-gray-700 dark:text-gray-400">-</span>
          </div> */}
          {/* Repeat for other OTP input boxes */}
        </div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Didn't receive code?</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-sm font-medium text-center text-gray-500 rounded hover:text-blue-500">Request via Call</button>
            <button className="px-3 py-2 text-sm font-medium text-center text-gray-500 rounded hover:text-blue-500">Request Again (00:00:36)</button>
          </div>
        </div>
        <button className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">Verify</button>
      </div>
    </div>
  );
}

export default Otp;
