import React, { useState } from "react";
import aiToolsData from "../json_data/aiTools.json";
import weeklySlidesData from "../json_data/weeklySlides.json";

function MembersPage() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeSection, setActiveSection] = useState("connections");

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

  const renderSection = () => {
    switch(activeSection) {
      case "connections":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[Connections List]</h2>
            <p>COMING SOON!</p>
          </div>
        );
      case "aiTools":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[AI Tools]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiTools.map((tool, index) => (
                <div key={index} className="border p-4 rounded-lg hover:shadow-md transition max-w-[350px]">
                  <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-2">{tool.description}</p>
                  {tool.link && (
                    <a 
                      href={tool.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline"
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
      case "aiNews":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[AI NEWS]</h2>
            
            {/* Weekly Slides Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Weekly News Slides</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {weeklySlides.map((slide, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold">{slide.week} ({slide.date})</h4>
                      <a 
                        href={slide.link} 
                        className="text-blue-500 hover:underline"
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
      case "feedback":
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
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
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
                onClick={() => setActiveSection("aiNews")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "aiNews" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                AI News
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
              <button 
                onClick={() => setActiveSection("feedback")}
                className={`w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === "feedback" 
                    ? "bg-black text-white" 
                    : "hover:bg-gray-200"
                }`}
              >
                Member Feedback and Suggestions
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