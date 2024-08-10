import React from 'react';

const T3 = () => {
  const users = [
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
      imgUrl: 'https://randomuser.me/api/portraits/men/1.jpg' 
    },
    { 
      name: 'Jane Smith', 
      email: 'janesmith@gmail.com', 
      phone: '555-555-1234', 
      imgUrl: 'https://randomuser.me/api/portraits/women/1.jpg' 
    },
    { 
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
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
      name: 'John Doe', 
      email: 'johndoe@gmail.com', 
      phone: '555-555-5555', 
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
    // Other users...
  ];

  return (
    <div className="mx-4 overflow-hidden ">
        <div className='mb-2 ml-6 text-lg font-bold'>
            TimeB
        </div>
        <div className="overflow-x-auto">
            <table className="w-full border-2 border-gray-400 table-auto rounded-xl">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-3 text-left text-gray-700 uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-gray-700 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-gray-700 uppercase">Phone</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b border-gray-200">
                                <div className="flex items-center">
                                    <img 
                                        src={user.imgUrl} 
                                        alt={user.name} 
                                        className="w-10 h-10 mr-3 rounded-full md:w-12 md:h-12"
                                    />
                                    <span className="font-medium">{user.name}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2 border-b border-gray-200">{user.email}</td>
                            <td className="px-4 py-2 border-b border-gray-200">{user.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default T3;
