import React, { useState } from 'react';

function UserProfileModal() {
  const [profileData, setProfileData] = useState({
    name: 'Nguyễn Dũng',
    email: 'Dungndse@gmail.com',
    phone: '0766763307',
    location: 'VIETNAM',
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div
        className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1500x900)', // Your background image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">User Profile</h2>
          <button className="text-gray-600 hover:text-gray-800" onClick={() => alert('Modal closed')}>
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <img
            className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500"
            src="data:image/jpeg;base64,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"
            alt="Profile"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <p className="mt-2 text-gray-700">{profileData.name}</p>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <p className="mt-2 text-gray-700">{profileData.email}</p>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <p className="mt-2 text-gray-700">{profileData.phone}</p>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Location</label>
          <p className="mt-2 text-gray-700">{profileData.location}</p>
        </div>

        {/* Close Button */}
        <div className="mt-6">
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            onClick={() => alert('Modal closed')}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfileModal;
