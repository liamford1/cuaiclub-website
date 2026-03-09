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
                  <h3 className="text-xl font-semibold">General Meetings</h3>
                  <p className="text-gray-600">Our bi-weekly general meetings feature a range of speakers, activities, and outside events. Guest speaker events feature industry leaders and AI experts sharing insights and experiences with Q&A and network opportunities! We also often collaborate with other clubs and organizations around CU and Boulder. Past  events include crypto talks with the Blockchain club, a tech talk with Red Bull athletes, and an entrepreneurship talk with a co-founder of BeReal. General meetings are open to all!</p>
                  <div className="mt-8">
                  </div>
                </div>
                <br></br>
                <div>
                  <h3 className="text-xl font-semibold">Professional Building Workshops</h3>
                  <p className="text-gray-600">The bi-weekly workshop meetings are an opportunity for Analysts and Consultants to work on AI consulting projects, and gain technical and business skills in AI. Through guest speakers and our team, members can expect to learn principles of software and AI development through real projects in AI that are for companies around Boulder as well as for the club.</p>
                  <div className="mt-8">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Section */}
        <div className="bg-gray-50 py-12">
          <h2 className="text-4xl font-mono font-bold text-gray-900 text-center mb-8">[Membership]</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
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
            <br></br>
            <div className="flex flex-col items-center bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Analyst</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li>✓ Professional building for AI including resume and LinkedIn</li>
                <li>✓ Personal passion project for the AI club</li>
                <li>✓ Learn from current executive board members</li>
                <li>✓ Industry AI project experience</li>
                <li>✓ Access to Workshop meetings</li>
                <li>✓ Consideration for executive board positions</li>
              </ul>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-6 border-2 border-gray-200 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Consultant</h3>
              <ul className="text-gray-600 text-center space-y-2">
                <li>✓ Industry AI project experience</li>
                <li>✓ Access to Workshop meetings</li>
                <li>✓ Networking with professionals around Boulder in various industries</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center -mt-16">
        <p className="text-lg font-semibold text-gray-700">
          * Prospective Members must attend at least 5 meetings to become a member *
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
