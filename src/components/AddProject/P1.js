import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExcelLogo from '../../Assets/Senior/excel.svg';
import PdfLogo from '../../Assets/Senior/excel.svg';
import WordLogo from '../../Assets/Senior/excel.svg';
import UploadSvg from "../../Assets/Senior/upload.svg"
const P1= () => {
  const [uploadedFiles, setUploadedFiles] = useState({
    Estimate: null,
    Offer: null,
    PO: null,
    Tendor: null,
  });

  const handleFileUpload = (event, cardTitle) => {
    const file = event.target.files[0];
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/csv',
    ];

    if (file && validTypes.includes(file.type)) {
      setUploadedFiles(prevState => ({
        ...prevState,
        [cardTitle]: { name: file.name, type: file.type },
      }));
    } else {
      toast.error('Unsupported file type. Please upload an Excel, PDF, Word, or CSV file.');
    }
  };

  const removeFile = (cardTitle) => {
    setUploadedFiles(prevState => ({
      ...prevState,
      [cardTitle]: null,
    }));
  };

  const getFileLogo = (fileType) => {
    switch (fileType) {
      case 'application/pdf':
        return PdfLogo;
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      case 'application/vnd.ms-excel':
      case 'text/csv':
        return ExcelLogo;
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return WordLogo;
      default:
        return null;
    }
  };

  const renderUploadedFiles = (cardTitle) => {
    const file = uploadedFiles[cardTitle];
    if (!file) return null;

    return (
      <div className="relative flex items-center justify-start w-auto py-6 mt-4 ">
        <div className='flex flex-row p-6 rounded-lg'>
          <div className="">
            <img src={getFileLogo(file.type)} alt={`${file.type} logo`} className="w-8 h-8 mr-4" />
            <span className="absolute top-0 left-0 text-xs font-semibold text-green-600">Uploaded</span>
          </div>
          <span className="text-gray-700">{file.name}</span>
          <button onClick={() => removeFile(cardTitle)} className="ml-4 text-red-500 hover:text-red-700">
            &times;
          </button>
        </div>
      </div>
    );
  };

  const renderCard = (title) => (
    <div className=''>
      <h2 className="mb-2 text-lg font-bold text-gray-700">{title}</h2>
      <div className="flex flex-col items-center p-6 border border-gray-300 border-dashed rounded-lg shadow-md">
      <img
          src={UploadSvg}
          alt="Upload"
          className="w-12 h-12 text-gray-400"
        />

        <div className='flex flex-row gap-2'>
        <label
          className="mb-2 text-blue-500 cursor-pointer "
          htmlFor={`${title}-file-upload`}
        >
          Click to upload
          <input
            type="file"
            id={`${title}-file-upload`}
            className="hidden"
            onChange={(e) => handleFileUpload(e, title)}
          />
        </label>
        <span className="text-gray-600">or drag and drop</span>
        </div>


        <p className="text-gray-600">(Max file 25 MB)</p>
      </div>
      {renderUploadedFiles(title)}
    </div>
  );

  return (
    <div className="container z-10 px-3 mx-auto mt-6 ">
      <ToastContainer />
      {/* Top Section */}
      <div className="flex flex-col items-center justify-between p-6 border border-black shadow-md md:flex-row rounded-2xl">
        {/* Left side - Text Content */}
        <div className="flex items-center mb-4 md:mb-0">
          <div className="pl-4 pr-6">
            <h1 className="mb-2 text-xl font-bold text-gray-400 md:text-2xl">May</h1>
            <h3 className="text-sm text-gray-400 md:text-md">Today is Saturday, June 9th, 2023</h3>
          </div>
          <div className="h-8 mx-4 border-l-2 border-gray-300 md:h-16"></div>
        </div>

        {/* Right side - Button */}
        <button className="px-8 py-2 font-semibold text-white transition duration-200 ease-in-out rounded-lg shadow-md bg-custom-gradient hover:bg-blue-600">
          + Add File
        </button>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
        {/* Card 1 */}
        <div>
          <h2 className="mb-2 text-lg font-bold text-gray-700">Job Card</h2>
          <div className="flex items-center justify-start p-6">
            <button className="px-10 py-4 font-semibold text-white transition duration-200 ease-in-out shadow-md bg-custom-gradient rounded-3xl hover:bg-blue-600">
              View/Edit Job card
            </button>
          </div>
        </div>

        {/* Remaining Cards */}
        {renderCard('Estimate')}
        {renderCard('Offer')}
        {renderCard('PO')}
        {renderCard('Tendor')}
      </div>
    </div>
  );
};

export default P1;
