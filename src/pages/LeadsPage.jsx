import React, { useState, useMemo } from 'react';
import { Filter, Plus } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import FiltersPanel from '../components/FiltersPanel';
import LeadTable from '../components/LeadTable';
import AddLeadModal from '../components/AddLeadModal';

const LeadsPage = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Karl Legros",
      contact: "857.256.0540",
      status: "Follow-Up",
      qualification: "Masters",
      interest: "Mobile Development",
      source: "Email Campaign",
      assignedTo: "John Doe",
      updatedAt: "May 22, 2025 11:02 PM"
    },
    {
      id: 2,
      name: "Bridget Hayes",
      contact: "1-318-365-9874 x98876",
      status: "Qualified",
      qualification: "PhD",
      interest: "Digital Marketing",
      source: "Website",
      assignedTo: "John Doe",
      updatedAt: "May 21, 2025 11:34 PM"
    },
    {
      id: 3,
      name: "Dr. Lawrence Cummings IV",
      contact: "314.612.3224 x796",
      status: "Qualified",
      qualification: "High School",
      interest: "Mobile Development",
      source: "Cold Call",
      assignedTo: "Jane Smith",
      updatedAt: "May 20, 2025 3:06 PM"
    },
    {
      id: 4,
      name: "Amos D'Amore",
      contact: "275-600-3449 x992",
      status: "Converted",
      qualification: "Bachelors",
      interest: "Data Science",
      source: "Social Media",
      assignedTo: "Jane Smith",
      updatedAt: "May 19, 2025 3:03 PM"
    },
    {
      id: 5,
      name: "Miss Norma Predovic",
      contact: "(866) 273-8839 x5755",
      status: "Converted",
      qualification: "High School",
      interest: "Data Science",
      source: "Website",
      assignedTo: "Emily Davis",
      updatedAt: "May 19, 2025 1:12 AM"
    },
    {
      id: 6,
      name: "Raul Kub",
      contact: "1-982-565-4955 x7464",
      status: "Qualified",
      qualification: "Other",
      interest: "Web Development",
      source: "Social Media",
      assignedTo: "Jane Smith",
      updatedAt: "May 18, 2025 8:54 PM"
    },
    {
      id: 7,
      name: "Rickey Swift",
      contact: "(389) 546-9831 x1408",
      status: "New",
      qualification: "Masters",
      interest: "Mobile Development",
      source: "Social Media",
      assignedTo: "Robert Johnson",
      updatedAt: "May 18, 2025 5:19 PM"
    },
    {
      id: 8,
      name: "Ernestine Leannon",
      contact: "(744) 349-5353 x5778",
      status: "New",
      qualification: "High School",
      interest: "Web Development",
      source: "Website",
      assignedTo: "Emily Davis",
      updatedAt: "May 17, 2025 7:23 PM"
    },
    {
      id: 9,
      name: "Ashley Ebert",
      contact: "1-668-550-4955 x7464",
      status: "Follow-Up",
      qualification: "PhD",
      interest: "UI/UX Design",
      source: "Social Media",
      assignedTo: "Jane Smith",
      updatedAt: "May 17, 2025 5:19 PM"
    }
  ]);

  const [showFilters, setShowFilters] = useState(false);
  const [showAddLead, setShowAddLead] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [filterMatch, setFilterMatch] = useState('ALL');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedRows, setExpandedRows] = useState({});

  const [newLead, setNewLead] = useState({
    name: '',
    phone: '',
    altPhone: '',
    email: '',
    altEmail: '',
    status: 'New',
    qualification: 'High School',
    interestField: 'Web Development',
    source: 'Website',
    assignedTo: 'John Doe',
    jobInterest: 'Select job interest',
    state: '',
    city: '',
    passoutYear: '',
    heardFrom: ''
  });

  const [errors, setErrors] = useState({});

  const statusColors = {
    'New': 'bg-blue-100 text-blue-800',
    'Follow-Up': 'bg-orange-100 text-orange-800',
    'Qualified': 'bg-green-100 text-green-800',
    'Converted': 'bg-purple-100 text-purple-800'
  };

  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.contact.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = !filterStatus || lead.status === filterStatus;
      
      return matchesSearch && matchesStatus;
    });
  }, [leads, searchTerm, filterStatus]);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const toggleRowExpansion = (leadId) => {
    setExpandedRows(prev => ({
      ...prev,
      [leadId]: !prev[leadId]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!newLead.name.trim()) newErrors.name = 'Name is required';
    if (!newLead.phone.trim()) newErrors.phone = 'Phone is required';
    if (!newLead.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(newLead.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddLead = () => {
    if (validateForm()) {
      const lead = {
        id: leads.length + 1,
        name: newLead.name,
        contact: newLead.phone,
        status: newLead.status,
        qualification: newLead.qualification,
        interest: newLead.interestField,
        source: newLead.source,
        assignedTo: newLead.assignedTo,
        updatedAt: new Date().toLocaleString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        })
      };
      
      setLeads([lead, ...leads]);
      setShowAddLead(false);
      setNewLead({
        name: '',
        phone: '',
        altPhone: '',
        email: '',
        altEmail: '',
        status: 'New',
        qualification: 'High School',
        interestField: 'Web Development',
        source: 'Website',
        assignedTo: 'John Doe',
        jobInterest: 'Select job interest',
        state: '',
        city: '',
        passoutYear: '',
        heardFrom: ''
      });
      setErrors({});
    }
  };

  const clearFilters = () => {
    setFilterStatus('');
    setSearchTerm('');
    setFilterMatch('ALL');
  };

  const applyFilters = () => {
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <div className="bg-white border-b border-gray-200 px-8 py-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {showFilters ? 'Leads Management' : 'Leads'}
                </h1>
                {!showFilters && (
                  <p className="text-gray-600 mt-1">Manage and track your leads</p>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {showFilters ? 'Hide Filters' : 'Filters'}
                </button>
                <button
                  onClick={() => setShowAddLead(true)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Lead
                </button>
              </div>
            </div>
          </div>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          <FiltersPanel
            showFilters={showFilters}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            filterMatch={filterMatch}
            setFilterMatch={setFilterMatch}
            clearFilters={clearFilters}
            applyFilters={applyFilters}
          />
          
          <LeadTable
            leads={filteredLeads}
            sortConfig={sortConfig}
            handleSort={handleSort}
            expandedRows={expandedRows}
            toggleRowExpansion={toggleRowExpansion}
            statusColors={statusColors}
          />
        </div>
      </div>

      <AddLeadModal
        showAddLead={showAddLead}
        setShowAddLead={setShowAddLead}
        newLead={newLead}
        setNewLead={setNewLead}
        errors={errors}
        handleAddLead={handleAddLead}
      />
    </div>
  );
};

export default LeadsPage;