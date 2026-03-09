import React from 'react';
import membersData from "../json_data/exec.json";
import ConnectTemplate from './ConnectTemplate';
import sponsersData from "../json_data/sponsers.json";



function TeamPage() {
  const { execs } = membersData;
  const { sponsers } = sponsersData;
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col items-center">
      <h1 className="absolute font-mono top-20 md:top-18 left-8 md:left-16 lg:left-20 text-5xl font-bold text-gray-900">
       [Meet Our Team!]
      </h1>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-8">
        {/* Left Side - Group Picture */}
        <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col justify-center items-center mt-24">
          <img 
            src="/headshots/execpic.webp"
            alt="Group Team Photo"
            className="rounded-lg shadow-xl w-full md:w-[90%] lg:w-[95%] h-auto"
          />
          {/* About Us Paragraph */}
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Executive Board at the CU AI Club is dedicated to building a community of learners and innovators passionate about artificial intelligence. 
              Our mission is to empower students with the skills and tools needed to excel in AI, connect with industry leaders, 
              and collaborate on meaningful projects that drive innovation. Whether you're just starting out or already experienced, 
              you'll find opportunities to grow, learn, and make an impact in the ever-evolving field of AI. Feel free to each out to any of our team members!
            </p>
          </div>
        </div>

        {/* Right Side - Sponsers */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-mono font-bold text-black mb-6">[Our Executive Board]</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-h-[600px] overflow-y-auto">
            {execs.map((exec, index) => (
              <a
                key={index}
                href={exec.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer h-full"
              >
                <div className="bg-gray-100 rounded-lg shadow-xl p-6 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300 h-full">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src={exec.image} 
                        alt={exec.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-1">{exec.name}</h3>
                    <p className="text-black text-center font-semibold mb-2">{exec.role}</p>
                    <p className="text-gray-500 text-center">{exec.major}</p> 
                    <p className="text-gray-400 text-center">{exec.home}</p>
                    <p className="text-gray-400 text-center">{exec.email}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="w-full flex flex-col items-center px-8 mt-16">
        <h1 className="text-4xl font-mono font-bold text-black mb-6">[Our Club Sponser]</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
          {sponsers.map((exec, index) => (
            <a
              key={index}
              href={exec.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div className="bg-gray-100 rounded-lg shadow-xl p-6 border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-1">{exec.name}</h3>
                  <p className="text-black text-center font-semibold mb-2">{exec.role}</p>
                  <p className="text-gray-500 text-center">{exec.major}</p>
                  <p className="text-gray-400 text-center">{exec.home}</p>
                  <p className="text-gray-400 text-center">{exec.email}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <ConnectTemplate />
    </div>
  );
}

export default TeamPage;