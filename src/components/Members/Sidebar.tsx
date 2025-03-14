import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, setActiveSection }) => {
  return (
    <div 
      className={`
        fixed h-full bg-gray-100 transition-all duration-300 ease-in-out 
        ${isSidebarOpen ? "w-64" : "w-12"}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-32 bg-black text-white rounded-full p-1 shadow-lg z-50"
      >
        {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      {/* Sidebar Content: Always in the DOM but hidden when closed */}
      <div 
        className={`
          h-full p-6 transition-all duration-300 ease-in-out overflow-hidden 
          ${isSidebarOpen ? "opacity-100 w-full" : "opacity-0 w-0"}
        `}
      >
        <h1 className="text-2xl font-mono font-bold text-gray-900 mt-16 mb-8">
          [Members Page]
        </h1>

        <nav className="w-full">
          {[
            { label: "Connections List", section: "connections" },
            { label: "AI Tools", section: "aiTools" },
            { label: "Meeting Content", section: "meetingContent" },
            { label: "Resume Bullet Points", section: "resumeBullets" },
          ].map(({ label, section }) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)}
              className={`
                w-full text-left py-2 px-4 rounded mb-2 text-black border-2 border-gray-300
                hover:bg-gray-200 transition
              `}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
