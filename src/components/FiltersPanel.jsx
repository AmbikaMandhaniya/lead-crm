import React from 'react';
import { X } from 'lucide-react';

const FiltersPanel = ({
  showFilters,
  filterStatus,
  setFilterStatus,
  filterMatch,
  setFilterMatch,
  clearFilters,
  applyFilters
}) => {
  if (!showFilters) return null;

  return (
    <div className="px-8 py-6 bg-white border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Filters</h3>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-gray-700 mr-4">Match</span>
        <div className="inline-flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="match"
              value="ALL"
              checked={filterMatch === 'ALL'}
              onChange={(e) => setFilterMatch(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">ALL conditions (AND)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="match"
              value="ANY"
              checked={filterMatch === 'ANY'}
              onChange={(e) => setFilterMatch(e.target.value)}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-700">ANY condition (OR)</span>
          </label>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-1">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select status</option>
            <option value="New">New</option>
            <option value="Follow-Up">Follow-Up</option>
            <option value="Qualified">Qualified</option>
            <option value="Converted">Converted</option>
          </select>
        </div>
        {filterStatus && (
          <button
            onClick={() => setFilterStatus('')}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
        Add Filter
      </button>

      <div className="flex justify-end space-x-3 mt-6">
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Clear
        </button>
        <button
          onClick={applyFilters}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;