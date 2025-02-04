import React, { useState } from "react";

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

  const aiTools = [
    {
      name: "Bolt.new",
      description: "Text to Website Generator",
      link: "https://bolt.new/",
      howItWorks: "Converts plain text into a fully functional website using AI.",
      purpose: "Generate simple web pages quickly without coding"
    },
    {
      name: "Replit Agent",
      description: "AI Software Builder",
      link: "https://docs.replit.com/replitai/agent",
      howItWorks: "Uses AI to interpret text-based instructions and generate functional software code.",
      purpose: "Help developers and non-coders build software quickly"
    },
    {
      name: "Claude",
      description: "AI Writing Assistant",
      link: "https://claude.ai/",
      howItWorks: "Uses natural language processing to assist with writing, summarizing, and content creation.",
      purpose: "Help with writing tasks, idea generation, and text refinement"
    },
    {
      name: "Midjourney",
      description: "AI Image & Logo Creation",
      link: "https://www.midjourney.com/explore?tab=top",
      howItWorks: "Uses deep learning to generate high-quality images from text descriptions.",
      purpose: "Create logos, artwork, and concept designs"
    },
    {
      name: "Runway AI",
      description: "AI Video Generation & Editing",
      link: "https://runwayml.com/",
      howItWorks: "Uses AI to generate, edit, and enhance videos with minimal manual input.",
      purpose: "Enable video creation, special effects, and animations"
    },
    {
      name: "Zapier",
      description: "Task Automation",
      link: "https://zapier.com/",
      howItWorks: "Connects different web apps and automates repetitive tasks using 'Zaps' (workflow automation rules).",
      purpose: "Automate tasks like data transfers, email alerts, and social media posting without coding"
    },
    {
      name: "Make.com",
      description: "Visual Automation Platform",
      link: "https://www.make.com/en",
      howItWorks: "Provides a drag-and-drop interface to automate workflows across apps and services.",
      purpose: "Create complex automation workflows visually without needing to write code"
    },
    {
      name: "Prometheus (PromptMetheus)",
      description: "Prompt Engineering Assistant",
      link: null,
      howItWorks: "Optimizes AI-generated prompts for better performance in large language models.",
      purpose: "Refine and test AI prompts for chatbots, content generation, and AI automation"
    },
    {
      name: "Postman",
      description: "API Automation & Testing",
      link: "https://www.postman.com/product/postbot/",
      howItWorks: "Provides an AI-powered assistant (Postbot) for generating, testing, and automating API requests.",
      purpose: "Simplify API development, debugging, and documentation for developers"
    },
    {
      name: "Suno",
      description: "AI-Powered Song Creation",
      link: "https://suno.com/",
      howItWorks: "Uses generative AI models to compose and produce original songs from text prompts.",
      purpose: "Generate music in various styles and genres instantly"
    },
    {
      name: "Replicate",
      description: "AI Model Hosting & Execution",
      link: "https://replicate.com/",
      howItWorks: "Provides access to pre-trained AI models for tasks like image generation, text analysis, and data processing.",
      purpose: "Allow developers to run AI models on-demand without setting up infrastructure"
    },
    {
      name: "Descript",
      description: "AI-Powered Video & Audio Editor",
      link: "https://www.descript.com/",
      howItWorks: "Uses AI to edit videos and audio by transcribing spoken words and allowing text-based editing.",
      purpose: "Enable users to edit media by simply modifying the text transcript"
    },
    {
      name: "Opus",
      description: "Short-Form Video Creation for Social Media",
      link: "https://www.opus.pro/",
      howItWorks: "Uses AI to generate engaging short-form videos optimized for social media platforms.",
      purpose: "Convert longer content into short, catchy clips for TikTok, Instagram Reels, and YouTube Shorts"
    },
    {
      name: "Study Fetch",
      description: "AI-Powered Study Assistant",
      link: "https://www.studyfetch.com/",
      howItWorks: "Utilizes AI to help students with studying, research, and content generation by processing large amounts of academic material.",
      purpose: "Generate summaries, create flashcards, help with essay writing, and improve study productivity"
    },
    {
      name: "Perplexity AI",
      description: "AI-Powered Search Engine",
      link: "https://www.perplexity.ai/",
      howItWorks: "Combines large language models with search capabilities to provide detailed answers with citations.",
      purpose: "Offer summarized search results and research presentations"
    },
    {
      name: "LockedIn AI",
      description: "AI Interview and Meeting Assistant",
      link: "https://www.lockedinai.com/",
      howItWorks: "Uses AI to assist users during interviews and professional meetings by providing real-time answers and tailored feedback.",
      purpose: "Enhance communication skills and boost confidence in professional settings"
    },
    {
      name: "Motion AI",
      description: "AI Task Management and Scheduling",
      link: "https://www.usemotion.com/",
      howItWorks: "Integrates AI into task management to help users plan their day by automatically scheduling tasks, meetings, and breaks.",
      purpose: "Optimize daily schedules, prioritize tasks, and enhance productivity"
    },
    {
      name: "Tome AI",
      description: "AI-Powered Presentation Creator",
      link: null,
      howItWorks: "Leverages AI to assist in creating presentations by generating content, designing slides, and organizing information.",
      purpose: "Simplify professional presentation creation and ensure cohesive design"
    },
    {
      name: "Pictory AI",
      description: "AI Video Generator",
      link: "https://pictory.ai/",
      howItWorks: "Transforms text content into engaging videos using AI by analyzing text to select relevant visuals and audio.",
      purpose: "Create compelling videos for marketing, education, or entertainment"
    },
    {
      name: "Taskade AI",
      description: "AI Productivity and Collaboration Tool",
      link: null,
      howItWorks: "Integrates AI into a collaborative workspace for task creation, project management, and team communication.",
      purpose: "Enhance team productivity by automating task assignments and generating project outlines"
    },
    {
      name: "HyperWrite AI",
      description: "AI Writing Assistant",
      link: "https://www.hyperwriteai.com/",
      howItWorks: "Uses advanced language models to assist with writing tasks, providing suggestions and generating content.",
      purpose: "Aid in drafting emails, articles, and other written content"
    }
    // Add more tools from the document...
  ];

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
      case "resumeBullets":
        return (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-mono font-bold mb-4">[Resume Bullet Points]</h2>
            <h3 className="text-md font-bold">CU AI CLUB</h3>
            <p>Active Member</p> 
            <p>(pick 2-3 of the following bullet points for your resume)</p>
            <ul className="text-gray-600 text-center space-y-2">
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
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
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
        <div className="relative flex">
          {/* Sidebar Navigation */}
          <div className="w-64 bg-gray-100 min-h-screen p-6">
            <h1 className="text-2xl font-mono font-bold text-gray-900 mt-16 mb-8">
              [Members Page]
            </h1>
            <nav>
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
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow p-8">
            <p className="text-lg font-mono text-gray-600 mb-6 mt-8">
              Welcome to the Members Page! Here you will find our connections and resources.
            </p>
            
            {renderSection()}
          </div>
        </div>
      )}
    </div>
  );
}

export default MembersPage;