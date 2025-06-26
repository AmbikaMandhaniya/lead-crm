import React, { useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const LeadTable = ({
  leads,
  sortConfig,
  handleSort,
  expandedRows,
  toggleRowExpansion,
  statusColors
}) => {
  const sortedLeads = useMemo(() => {
    let sortableLeads = [...leads];
    if (sortConfig.key) {
      sortableLeads.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableLeads;
  }, [leads, sortConfig]);

  const getSortIcon = (column) => {
    if (sortConfig.key === column) {
      return sortConfig.direction === 'asc' ? 
        <ChevronUp className="w-4 h-4 text-blue-600" /> : 
        <ChevronDown className="w-4 h-4 text-blue-600" />;
    }
    return (
      <div className="flex flex-col">
        <ChevronUp className="w-3 h-3 -mb-1 text-gray-300" />
        <ChevronDown className="w-3 h-3 text-gray-300" />
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center justify-between">
                  Name
                  {getSortIcon('name')}
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('contact')}
              >
                <div className="flex items-center justify-between">
                  Contact
                  {getSortIcon('contact')}
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center justify-between">
                  Status
                  {getSortIcon('status')}
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('qualification')}
              >
                <div className="flex items-center justify-between">
                  Qualification
                  {getSortIcon('qualification')}
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('interest')}
              >
                <div className="flex items-center justify-between">
                  Interest
                  {getSortIcon('interest')}
                </div>
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('source')}
              >
                <div className="flex items-center justify-between">
                  Source
                  {getSortIcon('source')}
                </div>
              </th>
              <th className="text-left py-4 px-6 font-medium text-gray-600 text-sm">
                Assigned To
              </th>
              <th 
                className="text-left py-4 px-6 font-medium text-gray-600 text-sm cursor-pointer hover:text-gray-900"
                onClick={() => handleSort('updatedAt')}
              >
                <div className="flex items-center justify-between">
                  Updated At
                  {getSortIcon('updatedAt')}
                </div>
              </th>
              <th className="w-12 py-4 px-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedLeads.map((lead) => (
              <React.Fragment key={lead.id}>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
                      {lead.name}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-gray-900">
                      {typeof lead.contact === 'string' && lead.contact.includes('x') ? (
                        <div>
                          <div>{lead.contact.split('x')[0].trim()}</div>
                          <div className="text-gray-600 text-sm">x{lead.contact.split('x')[1]}</div>
                        </div>
                      ) : (
                        lead.contact
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[lead.status]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{lead.qualification}</td>
                  <td className="py-4 px-6 text-gray-900">
                    <div>
                      {typeof lead.interest === 'string' && lead.interest.includes(' ') ? (
                        <div>
                          <div>{lead.interest.split(' ')[0]}</div>
                          <div>{lead.interest.split(' ').slice(1).join(' ')}</div>
                        </div>
                      ) : (
                        lead.interest
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{lead.source}</td>
                  <td className="py-4 px-6 text-gray-900">
                    <div>
                      {typeof lead.assignedTo === 'string' && lead.assignedTo.includes(' ') ? (
                        <div>
                          <div>{lead.assignedTo.split(' ')[0]}</div>
                          <div>{lead.assignedTo.split(' ')[1]}</div>
                        </div>
                      ) : (
                        lead.assignedTo
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 text-sm">
                    <div>
                      {typeof lead.updatedAt === 'string' && lead.updatedAt.includes(' ') ? (
                        <div>
                          <div>{lead.updatedAt.split(' ').slice(0, 3).join(' ')}</div>
                          <div>{lead.updatedAt.split(' ').slice(3).join(' ')}</div>
                        </div>
                      ) : (
                        lead.updatedAt
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => toggleRowExpansion(lead.id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {expandedRows[lead.id] ? 
                        <ChevronUp className="w-4 h-4" /> : 
                        <ChevronDown className="w-4 h-4" />
                      }
                    </button>
                  </td>
                </tr>
                {expandedRows[lead.id] && (
                  <tr className="bg-gray-50">
                    <td colSpan="9" className="px-6 py-4">
                      <div className="p-4 bg-white rounded-lg border border-gray-200">
                        <h3 className="font-medium mb-3 text-gray-900">Lead Details</h3>
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Full Name</p>
                            <p className="text-gray-900">{lead.name}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Contact</p>
                            <p className="text-gray-900">{lead.contact}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Status</p>
                            <p className="text-gray-900">{lead.status}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Qualification</p>
                            <p className="text-gray-900">{lead.qualification}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Interest</p>
                            <p className="text-gray-900">{lead.interest}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Source</p>
                            <p className="text-gray-900">{lead.source}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Assigned To</p>
                            <p className="text-gray-900">{lead.assignedTo}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Updated At</p>
                            <p className="text-gray-900">{lead.updatedAt}</p>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;