import React from 'react';
import { Linkedin, Instagram, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* What We Do Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 mt-8">
            <img 
              src="/about-page-imgs/abt_img3.webp"
              alt="Team Workshop"
              className="rounded-lg shadow-xl w-4/5 h-auto mt-4"
            />
            <img 
              src="/about-page-imgs/abt_img2.webp"
              alt="Collaboration"
              className="rounded-lg shadow-xl w-4/5 h-auto"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-mono font-bold text-gray-900">[What We Do]</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold">Professional Building Workshops</h3>
                  <p className="text-gray-600">We offer bi-weekly workshops led by our team and industry professionals to enhance your AI skills. These sessions cover topics like prompt engineering, AI integration in businesses, and workplace AI applications. Designed to provide practical insights and real-world experience, our workshops help members build confidence, refine expertise, and connect with a community of AI enthusiasts.</p>
                  <div className="mt-8">
                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog" className="inline-block px-6 py-3 w-40 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition flex items-center justify-center">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold">Guest Speaker Events</h3>
                  <p className="text-gray-600">Our guest speaker events feature industry leaders and AI experts sharing insights and experiences. These sessions provide opportunities to learn about new technologies, gain professional advice, and engage through Q&A. They inspire members and deepen their understanding of the skills needed to excel in the AI industry.</p>
                  <div className="mt-8">
                    <Link to="/schedule" className="inline-block px-6 py-3 bg-white text-black border-2 border-black rounded-lg hover:bg-gray-100 transition">
                      Upcoming Events
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold">Externship</h3>
                  <p className="text-gray-600">The CU AI Club Externship offers members the chance to collaborate with industry partners on real-world AI challenges. Participants gain hands-on experience in data analysis, AI-driven strategies, and problem-solving while enhancing teamwork, project management, and communication skills. This program bridges the gap between students and businesses, fostering innovation and providing a platform to showcase talents and build industry connections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="bg-gray-50 py-12">
          <h2 className="text-4xl font-mono font-bold text-gray-900 text-center mb-8">[Membership]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Prospective Member</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li>✓ Access to weekly meetings</li>
                <li>✓ Workshop participation</li>
                <li>✓ Guest speaker access</li>
                <li>✓ Networking oppritunity</li>
                <li>✓ Basic project involvement</li>
              </ul>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Active Member</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li>✓ Includes all general benefits</li>
                <li>✓ Exclusive project and Externship oppritunities</li>
                <li>✓ Access to our connections list</li>
                <li>✓ Access to our exclusive Members Page</li>
                <li>✓ Eligibility to list CU AI Club on your resume/LinkedIn</li>
              </ul>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Executive Member</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li>✓ Lead workshops and guide AI learning</li>
                <li>✓ Plan and organize major events</li>
                <li>✓ Collaborate with industry professionals</li>
                <li>✓ Manage club operations and finances</li>
                <li>✓ Showcase leadership on resume/LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center -mt-16">
        <p className="text-lg font-semibold text-gray-700">
          * Prospective Members must attend at least 3 meetings to become a member *
        </p>
      </div>

      {/* Connect With Us Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-mono font-bold text-center mb-12">[Connect With Us!]</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            <a href="https://www.linkedin.com/company/cuaiclub/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <Linkedin className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/aiclubcu/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <Instagram className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Instagram</span>
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQmxYOv_Rd-oQ6cpvXiod9RAOOoveV6chn_oKluHYmXJSRkQ/viewform?usp=dialog" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
              <FileText className="h-8 w-8 text-blue-600 mb-3" />
              <span className="text-gray-800 font-semibold">Interest Form</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
