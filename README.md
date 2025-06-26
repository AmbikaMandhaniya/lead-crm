# Lead Management Module

A comprehensive React-based lead management system with form validation, filtering, sorting, and responsive design built with Tailwind CSS.

##  Project Overview

This Lead Management Module provides a clean, intuitive interface for capturing, managing, and tracking leads. It demonstrates modern React patterns, form validation, and responsive UI design principles.

##  Features

### Core Functionality
- **Lead Capture Form**: Comprehensive form with validation for adding new leads
- **Lead List Management**: Display, sort, and filter leads efficiently
- **Advanced Filtering**: Filter leads by status with AND/OR conditions
- **Real-time Search**: Search leads by name, email, or phone number
- **Expandable Rows**: View detailed lead information inline
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Form Features
- **Multi-field Support**: Name, phone, email, qualification, interests, and more
- **Real-time Validation**: Immediate feedback for required fields and email format
- **Error Handling**: Clear error messages with visual indicators
- **Auto-reset**: Form clears after successful submission

### Table Features
- **Column Sorting**: Sort by name, contact, status, qualification, interest, source, and update date
- **Status Badges**: Color-coded status indicators (New, Follow-Up, Qualified, Converted)
- **Expandable Details**: Click to view complete lead information
- **Clean Typography**: Optimized text formatting for readability

##  Technology Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: Tailwind CSS 3.x
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

##  Project Structure

```
src/
├── components/
│   ├── AddLeadModal.jsx      # Lead creation modal with form
│   ├── LeadTable.jsx         # Data table with sorting and expansion
│   ├── FiltersPanel.jsx      # Advanced filtering interface
│   ├── SearchBar.jsx         # Real-time search component
│   └── Sidebar.jsx           # Navigation sidebar
├── pages/
│   └── LeadsPage.jsx         # Main page component
├── styles/
│   └── index.css             # Global styles and Tailwind imports
└── main.jsx                  # Application entry point
```

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmbikaMandhaniya/lead-crm
   cd lead-crm
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

##  Usage Guide

### Adding a New Lead
1. Click the "Add Lead" button in the header
2. Fill in the required fields (Name, Phone, Email)
3. Complete optional fields as needed
4. Click "Add Lead" to save

### Managing Leads
- **Search**: Use the search bar to find leads by name, contact, or email
- **Filter**: Click "Filters" to apply status-based filtering
- **Sort**: Click column headers to sort data
- **View Details**: Click the expand arrow to see full lead information

### Form Validation Rules
- **Name**: Required field
- **Phone**: Required field
- **Email**: Required field with valid email format
- **Other fields**: Optional with dropdown selections

##  Design Principles

- **Clean Interface**: Minimal, distraction-free design
- **Consistent Spacing**: Uniform padding and margins throughout
- **Color System**: Blue primary, gray neutrals, status-specific colors
- **Typography**: Clear hierarchy with appropriate font weights
- **Interactive Elements**: Hover states and smooth transitions

##  Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Compatible**: Adjusted layouts for medium screens
- **Desktop Enhanced**: Full feature set on large screens
- **Touch Friendly**: Appropriate touch target sizes

##  Component Architecture

### State Management
- Local state using React Hooks (`useState`)
- Computed values with `useMemo` for performance
- Props drilling for component communication

### Key Components
- **LeadsPage**: Main container with state management
- **AddLeadModal**: Form modal with validation logic
- **LeadTable**: Data presentation with sorting
- **FiltersPanel**: Advanced filtering interface
- **SearchBar**: Real-time search functionality

##  Form Validation

- **Client-side validation**: Immediate feedback
- **Required field checking**: Name, phone, email mandatory
- **Email format validation**: Regex pattern matching
- **Error state management**: Visual error indicators
- **Success handling**: Form reset after submission

##  Data Structure

```javascript
{
  id: number,
  name: string,
  contact: string,
  status: 'New' | 'Follow-Up' | 'Qualified' | 'Converted',
  qualification: 'High School' | 'Bachelors' | 'Masters' | 'PhD' | 'Other',
  interest: 'Web Development' | 'Mobile Development' | 'Digital Marketing' | 'Data Science' | 'UI/UX Design',
  source: 'Website' | 'Social Media' | 'Email Campaign' | 'Cold Call' | 'Referral',
  assignedTo: string,
  updatedAt: string
}
```

##  Performance Optimizations

- **Memoized Filtering**: Computed filtered results
- **Efficient Sorting**: In-memory array sorting
- **Minimal Re-renders**: Optimized state updates
- **Lazy Expansion**: Details loaded on demand

##  Color Scheme

- **Primary**: Blue (#2563eb)
- **Success**: Green (#16a34a)
- **Warning**: Orange (#ea580c)
- **Error**: Red (#dc2626)
- **Neutral**: Gray scale (#374151, #6b7280, #9ca3af)


##  License

This project is licensed under the MIT License - see the LICENSE file for details.

