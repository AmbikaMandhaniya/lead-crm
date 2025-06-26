import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-gray-900">LeadCRM</h1>
      </div>
      <nav className="mt-6">
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Dashboard</span>
          </div>
        </div>
        <div className="px-6 py-2 bg-blue-50 border-r-2 border-blue-500">
          <div className="flex items-center text-blue-600">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-blue-500 rounded"></div>
            </div>
            <span>Leads</span>
          </div>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Follow-Ups</span>
          </div>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Sales Activity</span>
          </div>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Products</span>
          </div>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Notifications</span>
          </div>
        </div>
        <div className="px-6 py-2">
          <div className="flex items-center text-gray-600 hover:text-gray-900 cursor-pointer">
            <div className="w-5 h-5 mr-3">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>
            <span>Settings</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;