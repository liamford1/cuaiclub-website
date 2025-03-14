import React, { ChangeEvent } from "react";
import { Search } from "lucide-react";

interface MemberSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterYear: string;
  setFilterYear: (year: string) => void;
}

const MemberSearch: React.FC<MemberSearchProps> = ({ searchQuery, setSearchQuery, filterYear, setFilterYear }) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Updates search query state
  };

  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterYear(e.target.value); // Updates year filter state
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, major, or interests..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <select
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        value={filterYear}
        onChange={handleFilterChange}
      >
        <option value="all">All Years</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
      </select>
    </div>
  );
};

export default MemberSearch;
