import React from "react";
import { ExecMember, Member, Speaker, AiTool, WeeklySlide } from "../../utils/dataLoader";

interface SectionRendererProps {
  activeSection: string;
  aiTools: AiTool[];
  weeklySlides: WeeklySlide[];
  featured: AiTool[];
  speakers: Speaker[];
  execs: ExecMember[];
  members: Member[];
  searchQuery: string;
  filterYear: string;
}

const SectionRenderer: React.FC<SectionRendererProps> = ({ activeSection, aiTools, weeklySlides, speakers, execs, members, searchQuery, filterYear }) => {
  switch (activeSection) {
    case "connections":
      // Filtering Executive Board & Members based on search query and year
      const filteredExecs = execs.filter((exec) => {
        const matchesSearch =
          exec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exec.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
          exec.interests.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = filterYear === "all" || exec.year === filterYear;
        return matchesSearch && matchesYear;
      });

      const filteredMembers = members.filter((member) => {
        const matchesSearch =
          member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.interests.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesYear = filterYear === "all" || member.year === filterYear;
        return matchesSearch && matchesYear;
      });

      return (
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-mono font-bold mb-4">[Club Members Directory]</h2>

          {/* Executive Board Table */}
          <h3 className="text-2xl font-mono font-bold mb-4">Executive Board</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="px-4 py-2 border">Major</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">LinkedIn</th>
                  <th className="px-4 py-2 border">Interests</th>
                  <th className="px-4 py-2 border">Role</th>
                </tr>
              </thead>
              <tbody>
                {filteredExecs.map((exec, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 border">{exec.name}</td>
                    <td className="px-4 py-2 border">{exec.year}</td>
                    <td className="px-4 py-2 border">{exec.major}</td>
                    <td className="px-4 py-2 border">
                      <a href={`mailto:${exec.email}`} className="text-blue-600 hover:underline">{exec.email}</a>
                    </td>
                    <td className="px-4 py-2 border">
                      <a href={exec.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile →</a>
                    </td>
                    <td className="px-4 py-2 border">{exec.interests}</td>
                    <td className="px-4 py-2 border">{exec.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Guest Speakers Table */}
          <h3 className="text-2xl font-mono font-bold mb-4 mt-6">Guest Speakers</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Company</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">LinkedIn</th>
                  <th className="px-4 py-2 border">Industry</th>
                </tr>
              </thead>
              <tbody>
                {speakers.map((speaker, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 border">{speaker.name}</td>
                    <td className="px-4 py-2 border">{speaker.company}</td>
                    <td className="px-4 py-2 border">
                      <a href={`mailto:${speaker.email}`} className="text-blue-600 hover:underline">{speaker.email}</a>
                    </td>
                    <td className="px-4 py-2 border">
                      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile →</a>
                    </td>
                    <td className="px-4 py-2 border">{speaker.industry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Active Members Table (Restored Original Formatting) */}
          <h3 className="text-2xl font-mono font-bold mb-4 mt-4">Active Members</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Year</th>
                  <th className="px-4 py-2 border">Major</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">LinkedIn</th>
                  <th className="px-4 py-2 border">Interests</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-2 border">{member.name}</td>
                    <td className="px-4 py-2 border">{member.year}</td>
                    <td className="px-4 py-2 border">{member.major}</td>
                    <td className="px-4 py-2 border">
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                    </td>
                    <td className="px-4 py-2 border">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Profile →</a>
                    </td>
                    <td className="px-4 py-2 border">{member.interests}</td>
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
                {tool.logo && <img src={tool.logo} alt={`${tool.name} logo`} className="absolute top-6 right-6 h-10" />}
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-2">{tool.description}</p>
                {tool.link && (
                  <a href={tool.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition">
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
                  <div 
                    key={index} 
                    className="border bg-gray-100 rounded-lg p-4 border-2 border-gray-200 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold">{slide.week} ({slide.date})</h4>
                      {slide.link !== "#" && (
                        <a
                          href={slide.link}
                          className="inline-block px-6 bg-gray-100 text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Slides →
                        </a>
                      )}
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

                {/* CU AI Club Active Member Resume Bullets */}
                <h3 className="text-md font-bold">CU AI Club – Active Member (Date – Present)</h3>
                <ul className="list-none text-gray-600 space-y-2 ml-8">
                    <li>✓ Participated in bi-weekly AI workshops on prompt engineering, AI integration in business, and workplace automation, gaining hands-on experience with industry tools like [insert for best job fit] and [insert for best job fit].</li>
                    <li>✓ [Insert valuable skill you learned specific to the job you’re applying for. Example: Built a dynamic website using BoltAI, leveraging its offline AI capabilities and crafting optimized prompts to generate high-quality content and enhance user experience.]</li>
                </ul>

                {/* More Options for Resume Bullet Points */}
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
    default:
      return null;
  }
};

export default SectionRenderer;
