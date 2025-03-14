import React, { useState } from "react";
import { getData } from "../utils/dataLoader";
import SectionRenderer from "../components/Members/SectionRenderer";
import Sidebar from "../components/Members/Sidebar";
import MemberSearch from "../components/Members/MemberSearch";
import PasswordGate from "../components/Members/PasswordGate";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Load all data from the centralized dataLoader
const { execs, members, aiTools, weeklySlides, featured, speakers } = getData();

const MembersPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState("connections");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  if (!isAuthenticated) {
    return <PasswordGate onAuthenticate={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div 
        className={`fixed h-full bg-gray-100 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : "w-12"
        }`}
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-32 bg-black text-white rounded-full p-1 shadow-lg z-50"
        >
          {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>

        {/* Sidebar Navigation */}
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          setActiveSection={setActiveSection} 
        />
      </div>

      {/* Main Content */}
      <div 
        className={`flex-grow transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-12"
        } p-8`}
      >
        <p className="text-lg font-mono text-gray-600 mb-6 mt-8">
          Welcome to the CU AI Club Members Page! This is where you can access our exclusive member resources.
        </p>

        {/* Show Member Search for Connections List */}
        {activeSection === "connections" && (
          <MemberSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            filterYear={filterYear} 
            setFilterYear={setFilterYear} 
          />
        )}

        {/* Dynamic Section Rendering */}
        <SectionRenderer 
          activeSection={activeSection} 
          aiTools={aiTools} 
          weeklySlides={weeklySlides} 
          featured={featured} 
          speakers={speakers}
          execs={execs}
          members={members}
          searchQuery={searchQuery} 
          filterYear={filterYear} 
        />
      </div>
    </div>
  );
};

export default MembersPage;
