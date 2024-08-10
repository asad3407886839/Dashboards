import React from 'react';

const T = () => {
  // Define the data for the table
  const data = [
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'Emily Davis', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'Emily Davis', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'Emily Davis', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Doe', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'John Smith', AlertTriggered: '2 mins ago', status: 'Active', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { name: 'Emily Davis', AlertTriggered: '2 mins ago', status: 'Inactive', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    // Add more objects as needed
  ];

  return (
    <div className="">
    

      
        <div className="flex items-center justify-between p-4 text-white bg-green-900 ">
          <div className="text-xl font-semibold mt-9">Alerts and Warnings</div>
          <div className="flex items-center gap-6 mt-9">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 text-white bg-gray-700 rounded-l"
            />
            <button className="px-10 py-2 text-white bg-gray-700 rounded-r hover:bg-gray-600">
              Sort by
            </button>
          </div>
        

        <table className="w-full text-white bg-green-900 table-fixed">
          <thead className="bg-green-900 rounded-xl">
            <tr>
              <th className="w-1/4 px-6 py-4 font-bold text-left uppercase">Name</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left uppercase">Alert Triggered</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left uppercase">Status</th>
              <th className="w-1/4 px-6 py-4 font-bold text-left uppercase">Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-800">
                <td className="px-6 py-4 border-b border-gray-200">{item.name}</td>
                <td className="px-6 py-4 border-b border-gray-200">{item.AlertTriggered}</td>
                <td className="px-6 py-4 border-b border-gray-200">
                  <span className={`bg-${item.status === 'Active' ? 'green' : 'red'}-500 text-white py-1 px-2 rounded-full text-xs`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default T;
