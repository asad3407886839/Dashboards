import React from 'react';

const T1 = () => {
  const users = [
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
      companyname: 'Dolanto', 
      dateAdded: '2024-08-05', 
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      name: 'Jane Smith', 
      email: 'janesmith@gmail.com', 
      phone: '555-555-1234', 
      companyname: 'Tech Solutions', 
      dateAdded: '2024-08-04', 
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      name: 'Alice Johnson', 
      email: 'alicejohnson@gmail.com', 
      phone: '555-555-6789', 
      companyname: 'Innovatech', 
      dateAdded: '2024-08-03', 
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
      companyname: 'Dolanto', 
      dateAdded: '2024-08-05', 
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      name: 'Jane Smith', 
      email: 'janesmith@gmail.com', 
      phone: '555-555-1234', 
      companyname: 'Tech Solutions', 
      dateAdded: '2024-08-04', 
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      name: 'Alice Johnson', 
      email: 'alicejohnson@gmail.com', 
      phone: '555-555-6789', 
      companyname: 'Innovatech', 
      dateAdded: '2024-08-03', 
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
      companyname: 'Dolanto', 
      dateAdded: '2024-08-05', 
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      name: 'Jane Smith', 
      email: 'janesmith@gmail.com', 
      phone: '555-555-1234', 
      companyname: 'Tech Solutions', 
      dateAdded: '2024-08-04', 
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      name: 'Alice Johnson', 
      email: 'alicejohnson@gmail.com', 
      phone: '555-555-6789', 
      companyname: 'Innovatech', 
      dateAdded: '2024-08-03', 
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
      companyname: 'Dolanto', 
      dateAdded: '2024-08-05', 
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      name: 'Jane Smith', 
      email: 'janesmith@gmail.com', 
      phone: '555-555-1234', 
      companyname: 'Tech Solutions', 
      dateAdded: '2024-08-04', 
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      name: 'Alice Johnson', 
      email: 'alicejohnson@gmail.com', 
      phone: '555-555-6789', 
      companyname: 'Innovatech', 
      dateAdded: '2024-08-03', 
      imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg' 
    },
    // Repeat as necessary
  ];

  return (
    <div className="mx-4 my-6 overflow-hidden rounded-lg shadow-lg md:mx-8 lg:mx-12">
      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="min-w-full bg-white divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-gray-600 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase">Email</th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase">Company</th>
              <th className="px-6 py-3 text-left text-gray-600 uppercase">Date Added</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img 
                      src={user.imgUrl} 
                      alt={user.name} 
                      className="w-12 h-12 mr-4 rounded-full"
                    />
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-700">{user.email}</td>
                <td className="px-6 py-4 text-gray-700">{user.phone}</td>
                <td className="px-6 py-4 text-gray-700">{user.companyname}</td>
                <td className="px-6 py-4 text-gray-700">{user.dateAdded}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for smaller screens */}
      <div className="md:hidden">
        {users.map((user, index) => (
          <div key={index} className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <img 
                src={user.imgUrl} 
                alt={user.name} 
                className="w-16 h-16 mr-4 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
                <p className="font-semibold text-gray-600">Email: {user.email}</p>
                <p className="font-semibold text-gray-600">Phone: {user.phone}</p>
                <p className="font-semibold text-gray-600">Company: {user.companyname}</p>
                <p className="font-semibold text-gray-600">Date Added: {user.dateAdded}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default T1;
