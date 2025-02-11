import React, { useState } from "react";
import aiToolsData from "../json_data/aiTools.json";
import weeklySlidesData from "../json_data/weeklySlides.json";
import execData from "../json_data/exec.json";
import speakersData from "../json_data/guestspeakers.json";
import { Search } from 'lucide-react';

function MembersPage() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState("connections");
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('all');

  const correctPassword = "cuai2025";

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };  

  const { aiTools } = aiToolsData;
  const { weeklySlides } = weeklySlidesData;
  const { execs } = execData;
  const { speakers } = speakersData;

  const filteredMembers = execs.filter(execs => {
    const matchesSearch = 
      execs.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      execs.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      execs.interests.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = filterYear === 'all' || execs.year === filterYear;
    
    return matchesSearch && matchesYear;
  });

  const renderSection = () => {
    switch(activeSection) {
      case "connections":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[Club Members Directory]</h2>
            
            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, major, or interests..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <option value="all">All Years</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </select>
            </div>
            <h3 className="text-2xl font-mono font-bold mb-4">Executive Board</h3>
            {/* Members Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border">Name</th>
                    <th className="px-4 py-2 text-left border">Year</th>
                    <th className="px-4 py-2 text-left border">Major</th>
                    <th className="px-4 py-2 text-left border">Email</th>
                    <th className="px-4 py-2 text-left border">LinkedIn</th>
                    <th className="px-4 py-2 text-left border">Interests</th>
                    <th className="px-4 py-2 text-left border">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map((exec, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-2 border">{exec.name}</td>
                      <td className="px-4 py-2 border">{exec.year}</td>
                      <td className="px-4 py-2 border">{exec.major}</td>
                      <td className="px-4 py-2 border">
                        <a 
                          href={`mailto:${exec.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {exec.email}
                        </a>
                      </td>
                      <td className="px-4 py-2 border">
                        <a 
                          href={`${exec.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Profile →
                        </a>
                      </td>
                      <td className="px-4 py-2 border">{exec.interests}</td>
                      <td className="px-4 py-2 border">{exec.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-mono font-bold mb-4 mt-4">Guest Speakers</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left border">Name</th>
                    <th className="px-4 py-2 text-left border">Company</th>
                    <th className="px-4 py-2 text-left border">Email</th>
                    <th className="px-4 py-2 text-left border">LinkedIn</th>
                    <th className="px-4 py-2 text-left border">Industry</th>
                  </tr>
                </thead>
                <tbody>
                  {speakers.map((speaker, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-2 border">{speaker.name}</td>
                      <td className="px-4 py-2 border">{speaker.company}</td>
                      <td className="px-4 py-2 border">
                        <a 
                          href={`mailto:${speaker.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {speaker.email}
                        </a>
                      </td>
                      <td className="px-4 py-2 border">
                        <a 
                          href={`${speaker.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Profile →
                        </a>
                      </td>
                      <td className="px-4 py-2 border">{speaker.industry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "aiTools":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[AI Tools]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiTools.map((tool, index) => (
                <div key={index} className="relative bg-gray-100 border border-gray-200 p-4 rounded-lg hover:shadow-md transition max-w-[350px]">
                  {tool.logo && (
                    <img 
                      src={tool.logo} 
                      alt={`${tool.name} logo`} 
                      className="absolute top-6 right-6 h-10"
                    />
                  )}
                  <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-2">{tool.description}</p>
                  {tool.link && (
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block px-6 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition"
                    >
                      Visit Website
                    </a>
                  )}
                  <div className="mt-2">
                    <p><strong>How it works:</strong> {tool.howItWorks}</p>
                    <p><strong>Purpose:</strong> {tool.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "meetingContent":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[News and Meeting Content]</h2>
            
            {/* Weekly Slides Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Weekly News Slides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {weeklySlides.map((slide, index) => (
                  <div key={index} className="border bg-gray-100 rounded-lg p-4 border-2 border-gray-200  hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold">{slide.week} ({slide.date})</h4>
                      <a 
                        href={slide.link} 
                        className="inline-block px-6 bg-gray-100 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Slides →
                      </a>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Key Takeaways:</p>
                      <ul className="list-disc pl-5 text-gray-600">
                        {slide.takeaways.map((takeaway, i) => (
                          <li key={i}>{takeaway}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "resumeBullets":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[Resume Bullet Points]</h2>
            <h3 className="text-md font-bold">CU AI Club – Active Member (Date – Present)</h3>
            <ul className="list-none text-gray-600 space-y-2 ml-8">
                <li>✓ Participated in bi-weekly AI workshops on prompt engineering, AI integration in business, and workplace automation, gaining hands-on experience with industry tools like [insert for best job fit] and [insert for best job fit]</li>
                <li>✓ [Insert valuable skill you learned specific to the job your applying to. Example: Built a dynamic website using BoltAI, leveraging its offline AI capabilities and crafting optimized prompts to generate high-quality content and enhance user experience..]</li>
            </ul>
            <h3 className="text-md font-bold mt-8">More options (pick 2-3 of the following prewritten bullet points for your resume)</h3>
            <ul className="list-none text-gray-600 space-y-2 ml-8">
                <li>✓ Attend bi-weekly AI workshops, gaining hands-on experience with relevant AI tools.</li>
                <li>✓ Participate in collaborative AI projects, applying AI to solve practical problems.</li>
                <li>✓ Engage with industry experts through guest speaker events, expanding knowledge of AI trends and applications.</li>
                <li>✓ Develop technical skills in AI model development, prompt engineering, and data visualization during club workshops.</li>
                <li>✓ Contribute to club initiatives by brainstorming and presenting ideas for AI-driven projects and events.</li>
                <li>✓ Collaborate with peers to create AI solutions, fostering teamwork and problem-solving skills.</li>
                <li>✓ Built foundational knowledge of AI ethics and its implications in real-world applications during group discussions.</li>
                <li>✓ Demonstrate commitment to learning and innovation by consistently participating in events and completing workshop challenges.</li>
                <li>✓ Enhance understanding of AI in business through interactive sessions on integrating AI solutions into workflows.</li>
            </ul>
          </div>
        );
      case "externship":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p>COMING SOON!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isAuthenticated ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-xl w-full max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Members Area
            </h1>
            <p className="text-gray-600 mb-4 text-center">
              Enter the password to access the Members page.
            </p>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                placeholder="Enter password"
                value={enteredPassword}
                onChange={(e) => setEnteredPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white font-bold rounded-lg hover:bg-gray-400 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex">
          {/* Sidebar Navigation - Fixed width */}
          <div className="w-64 flex-none bg-gray-100 min-h-screen p-6 fixed">
            <h1 className="text-2xl font-mono font-bold text-gray-900 mt-16 mb-8">
              [Members Page]
            </h1>
            <nav className="w-full">
              <button 
                onClick={() => setActiveSection("connections")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "connections" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                Connections List
              </button>
              <button 
                onClick={() => setActiveSection("aiTools")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "aiTools" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                AI Tools
              </button>
              <button 
                onClick={() => setActiveSection("resumeBullets")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "resumeBullets" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                Resume Bullet Points
              </button>
              <button 
                onClick={() => setActiveSection("meetingContent")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "meetingContent" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                Meeting Content
              </button>
              <button 
                onClick={() => setActiveSection("externship")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "externship" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                Externship and Oppritunities
              </button>
            </nav>
          </div>

          {/* Main Content Area - With offset margin */}
          <div className="flex-grow ml-64 p-8">
            <p className="text-lg font-mono text-gray-600 mb-6 mt-8">
              **Welcome to the Members Page! Here you will find our connections and resources. This page is under development but should be mostly functional!**
            </p>
            
            {renderSection()}
          </div>
        </div>
      )}
    </div>
  );
}

export default MembersPage;