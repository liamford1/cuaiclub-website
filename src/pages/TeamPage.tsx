import React from 'react';
import { Linkedin, Instagram, FileText } from 'lucide-react';

const teamMembers = [
  { 
    name: "Coleman Sayers", 
    role: "President", 
    image: "../src/imgs/coleman_headshot.png", 
    linkedin: "https://www.linkedin.com/in/coleman-sayers-09b4bb291/",
    about: "Finance and Real Estate",
    home: "Ft Collins, CO"
  },
  { 
    name: "Brodie Pearson", 
    role: "Vice President", 
    image: "../src/imgs/brodie_headshot.png", 
    linkedin: "https://www.linkedin.com/in/brodie-pearson-6316b6271/",
    about: "Finance and Accounting",
    home: "Steamboat Springs, CO"
  },
  { 
    name: "Liam Ford", 
    role: "VP of Operations and Technology", 
    image: "../src/imgs/liam_headshot.png", 
    linkedin: "https://www.linkedin.com/in/liam-ford-81892128a/",
    about: "CS and Business minor",
    home: "Marin County, CA"
  },
  { 
    name: "Max Lane", 
    role: "VP of Member Recruitment", 
    image: "../src/imgs/max_headshot.png", 
    linkedin: "https://www.linkedin.com/in/maxwell-j-lane/",
    about: "CS and QF Cert.",
    home: "Highlands Ranch, CO"
  },
  {
    name: "Samantha Lopes", 
    role: "Director of Strategy", 
    image: "../src/imgs/sammy_headshot.png", 
    linkedin: "https://www.linkedin.com/in/samantha--lopes/",
    about: "Marketing",
    home: "Napels, FL"
  },
  { 
    name: "Corbin Salinas", 
    role: "VP of Marketing", 
    image: "../src/imgs/corbin_headshot.png", 
    linkedin: "https://www.linkedin.com/in/corbinsalinas/",
    about: "Scholars Business Marketing",
    home: "Dallas, TX"
  },
  { 
    name: "Sam Hunchinson", 
    role: "VP of Public Relations", 
    image: "../src/imgs/sam_headshot.png", 
    linkedin: "https://www.linkedin.com/in/samhutch56/",
    about: "Finance and Real Estate",
    home: "Folsom, CA"
  },
  { 
    name: "Charlie Seck", 
    role: "VP of Finance", 
    image: "../src/imgs/charlie_headshot.png", 
    linkedin: "https://www.linkedin.com/in/charles-seck/",
    about: "Honors Finance",
    home: "Columbus, OH"
  },
  { 
    name: "Steel Wylie", 
    role: "VP of Member Relations", 
    image: "../src/imgs/steel_headshot.png", 
    linkedin: "https://www.linkedin.com/in/steelwylie/",
    about: "Scholars Finance and Accounting",
    home: "Dallas, TX"
  },
];

function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col items-center">
      <h1 className="absolute font-mono top-20 md:top-18 left-8 md:left-16 lg:left-20 text-5xl font-bold text-gray-900">
       [Meet Our Team!]
      </h1>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center px-8">
        {/* Left Side - Group Picture */}
        <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col justify-center items-center mt-24">
          <img 
            src="../src/imgs/execpic.png" 
            alt="Group Team Photo"
            className="rounded-lg shadow-xl w-full md:w-[90%] lg:w-[95%] h-auto"
          />
          {/* About Us Paragraph */}
          <div className="mt-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Executive Board at the CU AI Club is dedicated to fostering a community of learners and innovators passionate about artificial intelligence. 
              Our mission is to empower students with the skills and tools needed to excel in AI, connect with industry leaders, 
              and collaborate on meaningful projects that drive innovation. Whether you're just starting out or already experienced, 
              you'll find opportunities to grow, learn, and make an impact in the ever-evolving field of AI. Feel free to each out to any of our team members!
            </p>
          </div>
        </div>

        {/* Right Side - Team Members */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-6">[Our Executive Board]</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-h-[600px] overflow-y-auto">
            {teamMembers.map((member, index) => (
              <a 
                key={index} 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-500 text-center">{member.about}</p> 
                    <p className="text-gray-400 text-center">{member.home}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Connect With Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12">[Connect With Us!]</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <a href="https://www.linkedin.com/company/cuaiclub/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition w-full min-w-[400px]">
              <Linkedin className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/aiclubcu/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition w-full min-w-[400px]">
              <Instagram className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Instagram</span>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition w-full min-w-[400px]">
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Interest Form</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;