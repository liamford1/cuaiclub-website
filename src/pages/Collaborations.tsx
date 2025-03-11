import React from 'react';

interface Collaboration {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const collaborations: Collaboration[] = [
  {
    name: "Pickaxe",
    logo: "../../ai-tool-logos/pickaxe-logo.webp", // Replace with actual image path
    description: "Pickaxe is a platform that enables users to create AI-powered tools without coding. It simplifies the process of building custom AI applications.",
    website: "https://www.pickaxeproject.com/",
  },
  {
    name: "Coursewand",
    logo: "../../ai-tool-logos/coursewand-logo.webp", // Replace with actual image path
    description: "Coursewand provides AI-driven course recommendations and personalized learning pathways to help students make informed academic decisions.",
    website: "https://www.coursewand.com/",
  }
];

const CollaborationsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold font-mono text-center mb-12 mt-12">[Our Collaborations]</h1>

      <div className="grid md:grid-cols-2 gap-24">
        {collaborations.map((collab, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={collab.logo} alt={`${collab.name} Logo`} className="w-full h-48 object-contain bg-gray-100 p-4" />
            <div className="p-6 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-2 text-center">{collab.name}</h2>
              <p className="text-gray-700 mb-6 text-center">{collab.description}</p>
              <a 
                href={collab.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-2 text-black border border-black rounded-lg bg-white hover:bg-black hover:text-white transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollaborationsPage;
